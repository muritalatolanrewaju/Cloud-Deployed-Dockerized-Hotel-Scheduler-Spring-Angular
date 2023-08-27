package com.hotel.cloud.i18n;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/timezones")
public class TimeZoneConversionController {

    @GetMapping("/convert")
    public String getConvertedTimes() {
        TimeConversion converter = new TimeConversion();
        return converter.convertTimeZones();
    }
}

