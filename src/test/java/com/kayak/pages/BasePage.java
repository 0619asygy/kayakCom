package com.kayak.pages;

import com.kayak.utilities.MyDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    public BasePage() {
        PageFactory.initElements(MyDriver.get(), this);
    }

    /*
    public static void clearCookies(){
      //  Set<Cookie> cookies = MyDriver.get().manage().getCookies();

        MyDriver.get().manage().deleteAllCookies();
    }

     */


    public void scrollDown(WebElement link){

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {

        }

        JavascriptExecutor js = (JavascriptExecutor)MyDriver.get();
        js.executeScript("argument[0].scrollIntoView(true)", link);
    }


    public static void wait(int seconds) {

        try {
            Thread.sleep(seconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
