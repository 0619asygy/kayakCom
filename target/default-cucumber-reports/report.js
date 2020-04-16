$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Kayak.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user goes to kayak.com website and makes a search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cOrigin\u003e\" and \"\u003cDestination\u003e\" cities",
  "keyword": "When "
});
formatter.step({
  "name": "enters \"\u003cDeparture\u003e\" and \"\u003cReturn\u003e\" dates",
  "keyword": "And "
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.step({
  "name": "results page loads with results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Origin",
        "Destination",
        "Departure",
        "Return"
      ]
    },
    {
      "cells": [
        "New York",
        "Dallas",
        "4/20/2020",
        "4/25/2020"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user goes to kayak.com website and makes a search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchPageSteps.user_is_in_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"New York\" and \"Dallas\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageSteps.user_enters_and_cities(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"4/20/2020\" and \"4/25/2020\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.enters_and_dates(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results page loads with results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageSteps.results_page_loads_with_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});