package com.hotel.cloud.i18n;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class WelcomeController {

    @GetMapping("/welcome")
    public String getWelcomeMessage(@RequestParam String language, @RequestParam String country) {
        Locale locale = new Locale.Builder().setLanguage(language).setRegion(country).build();
        return DisplayMessage.getWelcomeMessage(locale);
    }
}
