package com.hotel.cloud.i18n;

import java.util.Locale;
import java.util.ResourceBundle;

public class DisplayMessage {

    public static String getWelcomeMessage(Locale locale) {
        ResourceBundle bundle = ResourceBundle.getBundle("Welcome", locale);
        return bundle.getString("welcome.message");
    }
}
