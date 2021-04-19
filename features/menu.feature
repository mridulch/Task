Feature: Main menu

    Scenario Outline: User should able to see list of menu while performing click operation on hamburger icon

        Given I am on the "carSafety" page
        When I click on hamburgerIcon
        Then I verify menu items contains "Buy,Own,Why Volvo,Explore,More"