package com.kayak.pages;

import com.kayak.utilities.MyDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class LandingPage  extends BasePage{


    @FindBy(xpath = "//input[@aria-label='Flight origin input']")
    public WebElement originBox;

    @FindBy(xpath = "(//input[@aria-label='Flight destination input'])[2]")
    public WebElement destinationBox;

    @FindBy(xpath = "//div[@class='_iac _irF _Hk _h-8']/button")
    public WebElement xIcon;

//oyyyyyy

    public void Wait(){
        MyDriver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

}
