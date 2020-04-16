package com.kayak.stepDef;

import com.kayak.pages.LandingPage;
import io.cucumber.java.en.*;
import org.junit.Test;

public class SearchPageSteps {
    LandingPage landingPage = new LandingPage();


    @Given("user is in landing page")
    public void user_is_in_landing_page() {
        System.out.println("Landing page");
    }

    @When("user enters {string} and {string} cities")
    public void user_enters_and_cities(String origin, String destination) {
        System.out.println("Entering Origin city");

        landingPage.originBox.sendKeys(origin);
        landingPage.destinationBox.sendKeys(destination);


        System.out.println("Entering Destination city");

        System.out.println("Entering Origin city : " + origin);
        System.out.println("Entering Destination city : " + destination);




    }

    @When("enters {string} and {string} dates")
    public void enters_and_dates(String string, String string2) {
        System.out.println("Entering Origin date");
        System.out.println("Entering Destination date");

    }

    @When("click search")
    public void click_search() {
        System.out.println("Clicking search");
    }

    @Then("results page loads with results")
    public void results_page_loads_with_results() {

    }

}
