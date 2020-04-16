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
<<<<<<< HEAD
    },
    {
      "cells": [
        "Atlanta",
        "Charlotte",
        "4/26/2020",
        "4/29/2020"
      ]
    },
    {
      "cells": [
        "Los Angeles",
        "El Paso",
        "4/30/2020",
        "5/20/2020"
      ]
=======
>>>>>>> 2fcc9acf6d1cd6d4971bd21875ce79b40f0620e0
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
<<<<<<< HEAD
  "error_message": "java.lang.NullPointerException\r\n\tat com.kayak.stepDef.SearchPageSteps.user_enters_and_cities(SearchPageSteps.java:21)\r\n\tat ✽.user enters \"New York\" and \"Dallas\" cities(file:src/test/resources/features/Kayak.feature:5)\r\n",
  "status": "failed"
=======
  "status": "passed"
>>>>>>> 2fcc9acf6d1cd6d4971bd21875ce79b40f0620e0
});
formatter.step({
  "name": "enters \"4/20/2020\" and \"4/25/2020\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.enters_and_dates(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.click_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results page loads with results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageSteps.results_page_loads_with_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
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
  "name": "user enters \"Atlanta\" and \"Charlotte\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageSteps.user_enters_and_cities(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.kayak.stepDef.SearchPageSteps.user_enters_and_cities(SearchPageSteps.java:21)\r\n\tat ✽.user enters \"Atlanta\" and \"Charlotte\" cities(file:src/test/resources/features/Kayak.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enters \"4/26/2020\" and \"4/29/2020\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.enters_and_dates(String,String)"
});
formatter.result({
  "status": "skipped"
});
=======
  "status": "passed"
});
>>>>>>> 2fcc9acf6d1cd6d4971bd21875ce79b40f0620e0
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.click_search()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
});
formatter.step({
  "name": "results page loads with results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageSteps.results_page_loads_with_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
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
  "name": "user enters \"Los Angeles\" and \"El Paso\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageSteps.user_enters_and_cities(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.kayak.stepDef.SearchPageSteps.user_enters_and_cities(SearchPageSteps.java:21)\r\n\tat ✽.user enters \"Los Angeles\" and \"El Paso\" cities(file:src/test/resources/features/Kayak.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enters \"4/30/2020\" and \"5/20/2020\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.enters_and_dates(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchPageSteps.click_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
=======
  "status": "passed"
});
formatter.step({
>>>>>>> 2fcc9acf6d1cd6d4971bd21875ce79b40f0620e0
  "name": "results page loads with results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageSteps.results_page_loads_with_results()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
=======
  "status": "passed"
});
>>>>>>> 2fcc9acf6d1cd6d4971bd21875ce79b40f0620e0
formatter.after({
  "status": "passed"
});
});