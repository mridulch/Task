import { Given, When, Then } from '@cucumber/cucumber';
import env from '../pageobjects/environment'


Given("I am on the {string} page", async (page) => {
    await browser.url(env.carSafety)
    let accept = await $("//button[text()='Accept']")
    await accept.click()

});
Then("I verify the title of the page is {string}", async (title) => {
    expect(await browser.getTitle()).toEqual(title)
})
When("I click on hamburgerIcon", async () => {
    let icon = await $('(//button[@data-autoid="nav:siteNavHamburgerIcon"])[1]')
    await icon.click()
})
Then("I verify menu items contains {string}", async (listItems) => {
    let list = []
    let menuItems = await $$('//div[@data-autoid="nav:sideNavLinksMenu"]/button')
    let len = await menuItems.length
    for (let i = 0; i < len; i++) {
        list.push(await menuItems[i].getText())
    }
    expect(list.join()).toEqual(listItems)
})



