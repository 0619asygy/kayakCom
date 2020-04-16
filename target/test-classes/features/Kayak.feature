Feature:

  Scenario Outline: user goes to kayak.com website and makes a search
    Given user is in landing page
    When  user enters "<Origin>" and "<Destination>" cities
    And  enters "<Departure>" and "<Return>" dates
    And click search
    Then results page loads with results
    Examples:
      | Origin      | Destination | Departure | Return    |
      | New York    | Dallas      | 4/20/2020 | 4/25/2020 |


