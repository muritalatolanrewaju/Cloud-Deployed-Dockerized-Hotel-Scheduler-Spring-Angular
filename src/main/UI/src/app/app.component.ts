import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcomeMessageEnglish!: string;
  welcomeMessageFrench!: string;
  convertedTimes!: string;  // Variable to store the converted times
  public submitted!: boolean;
  roomsearch!: FormGroup;
  rooms!: Room[];
  request!: ReserveRoomRequest;
  currentCheckInVal!: string;
  currentCheckOutVal!: string;
  private baseURL: string = 'http://localhost:8080';
  private getUrl: string = this.baseURL + '/room/reservation/v1/';
  private postUrl: string = this.baseURL + '/room/reservation/v1';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
    this.welcomeMessageEnglish = '';
    this.welcomeMessageFrench = '';
  }

  ngOnInit() {
    // Fetch converted times
    this.fetchConvertedTimes();

    // Fetch English welcome message
    this.httpClient.get('http://localhost:8080/welcome?language=en&country=US', {responseType: 'text'})
      .subscribe((response: string) => {
          console.log("Fetched English message:", response);
          this.welcomeMessageEnglish = response;
        },
        error => {
          console.error("Error fetching English welcome message:", error);
        }
      );

    // Fetch French welcome message
    this.httpClient.get('http://localhost:8080/welcome?language=fr&country=CA', {responseType: 'text'})
      .subscribe((response: string) => {
          console.log("Fetched French message:", response);
          this.welcomeMessageFrench = response;
        },
        error => {
          console.error("Error fetching French welcome message:", error);
        }
      );

    this.roomsearch = new FormGroup({
      checkin: new FormControl(' '),
      checkout: new FormControl(' ')
    });

    //     this.rooms=ROOMS;


    const roomsearchValueChanges$ = this.roomsearch.valueChanges;

    // subscribe to the stream
    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });
  }

  fetchConvertedTimes() {
    this.httpClient.get(this.baseURL + '/api/timezones/convert', {responseType: 'text'})
      .subscribe((response: string) => {
          this.convertedTimes = response;
        },
        error => {
          console.error("Error fetching converted times:", error);
        }
      );
  }

  onSubmit({value, valid}: { value: Roomsearch, valid: boolean }) {
    this.getAll().subscribe(rooms => {
      console.log(Object.values(rooms)[0]);
      this.rooms = <Room[]>Object.values(rooms)[0];
      this.rooms.forEach(room => {
        room.priceCAD = room.price * 1.25;
        room.priceEUR = room.price * 0.85;
      });
    });
  }

  reserveRoom(value: string) {
    this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);
    this.createReservation(this.request);
  }

  createReservation(body: ReserveRoomRequest) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    // let options = new RequestOptions({headers: headers}); // Create a request option

    const options = {
      headers: new HttpHeaders().append('key', 'value'),

    }

    this.httpClient.post(this.postUrl, body, options)
      .subscribe(res => console.log(res));
  }

  /*mapRoom(response:HttpResponse<any>): Room[]{
    return response.body;
  }*/

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/room/reservation/v1?checkin=' + this.currentCheckInVal + '&checkout=' + this.currentCheckOutVal, {responseType: 'json'});
  }
}

export interface Roomsearch {
  checkin: string;
  checkout: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  price: number; // Changed from string to number for calculations
  priceCAD?: number;
  priceEUR?: number;
  links: string;
}

export class ReserveRoomRequest {
  roomId: string;
  checkin: string;
  checkout: string;

  constructor(roomId: string,
              checkin: string,
              checkout: string) {

    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}

/*
var ROOMS: Room[]=[
  {
  "id": "13932123",
  "roomNumber" : "409",
  "price" :"20",
  "links" : ""
},
{
  "id": "139324444",
  "roomNumber" : "509",
  "price" :"30",
  "links" : ""
},
{
  "id": "139324888",
  "roomNumber" : "609",
  "price" :"40",
  "links" : ""
}
] */

