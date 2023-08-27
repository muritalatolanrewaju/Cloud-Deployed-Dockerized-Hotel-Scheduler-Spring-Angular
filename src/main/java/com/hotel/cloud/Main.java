package com.hotel.cloud;

import com.hotel.cloud.i18n.DisplayMessage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Locale;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

        // Create two Locales for English and French using Locale.Builder
        Locale localeEnglish = new Locale.Builder().setLanguage("en").setRegion("US").build();
        Locale localeFrench = new Locale.Builder().setLanguage("fr").setRegion("CA").build();

        // Create two threads
        Thread threadEnglish = new Thread(() -> System.out.println("English: " + DisplayMessage.getWelcomeMessage(localeEnglish)));

        Thread threadFrench = new Thread(() -> System.out.println("French: " + DisplayMessage.getWelcomeMessage(localeFrench)));

        // Start the threads
        threadEnglish.start();
        threadFrench.start();
    }
}
