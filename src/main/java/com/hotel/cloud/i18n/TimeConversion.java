package com.hotel.cloud.i18n;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class TimeConversion {

    public String convertTimeZones() {
        ZonedDateTime now = ZonedDateTime.now();

        ZonedDateTime etTime = now.withZoneSameInstant(ZoneId.of("America/New_York"));
        ZonedDateTime mtTime = now.withZoneSameInstant(ZoneId.of("America/Denver"));
        ZonedDateTime utcTime = now.withZoneSameInstant(ZoneId.of("UTC"));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        return "Eastern Time (ET): " + etTime.format(formatter) + " | Mountain Time (MT): " + mtTime.format(formatter) + " | Coordinated Universal Time (UTC): " + utcTime.format(formatter);


    }
}
