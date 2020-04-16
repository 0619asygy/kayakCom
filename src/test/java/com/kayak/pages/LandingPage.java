package com.kayak.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LandingPage {


    @FindBy(xpath = "(//div[contains(@id, 'origin-airport-display-multi-container')])[1]")
    public WebElement originBox;

    @FindBy(xpath = "(//input[@name='destination'])[1]")
    public WebElement destinationBox;

}
