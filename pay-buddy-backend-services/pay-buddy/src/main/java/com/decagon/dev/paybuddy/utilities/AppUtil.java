package com.decagon.dev.paybuddy.utilities;

import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class AppUtil {

    public boolean validImage(String fileName)
    {
        String regex = "(.*/)*.+\\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)$";
        Pattern p = Pattern.compile(regex);
        if (fileName == null) {
            return false;
        }
        Matcher m = p.matcher(fileName);
        return m.matches();
    }

    //Email validation
    public boolean validEmail(String email) {
        String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
        return email.matches(regex);
    }

    public String getFormattedNumber(final String number){
        String trimmedNumber = number.trim();
        String formattedNumber = null;
        if(trimmedNumber.startsWith("0"))
            formattedNumber = "+234" + trimmedNumber.substring(1);
        else if(trimmedNumber.startsWith("234"))
            formattedNumber = "+" + number;
        else if (!number.startsWith("+")
                && Integer.parseInt(String.valueOf(number.charAt(0))) > 0) {
            formattedNumber = "+234" + number;
        }
        return  formattedNumber;
    }
    public  String generateAccountNumber(Long userId, String email) {
        int randomNumber = ThreadLocalRandom.current().nextInt(1000000000, 2000000000);
        return userId + email.hashCode() + String.valueOf(randomNumber);
    }
    public Integer extractLastFourCharacterOfAccountNumber(String accountNumber){

        return Integer.parseInt(accountNumber.substring(accountNumber.length() - 4));

    }
}
