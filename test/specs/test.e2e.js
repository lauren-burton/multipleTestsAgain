import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
// logging in
describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard', 'secret_sauce')
        await expect(SecurePage.stayOnPage).toBeExisting()
     
    })

})

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.inventoryList).toBeExisting()
        await expect(SecurePage.inventoryList).toHaveTextContaining(
            'Sauce Labs Backpack')
    }) })
   // adding to cart
describe('Adding to Cart', () => {
        it ('will be stress tested', async () => {
            await LoginPage.stressTesting();

            await expect(SecurePage.inventoryList).toBeExisting();
        })
        it ('should add items to cart', async () => {
            await LoginPage.addToCart();
     
             await expect(SecurePage.cartAdd).toBeExisting();
         })
        
    })
//checking out
describe('Checking out', () => {
    it ('should not checkout', async () => {
        await LoginPage.dontCheckout();
        await expect(SecurePage.refuseToCheckout).toBeExisting();
    })
    it ('should checkout', async () => {
        await LoginPage.checkout('john', 'smith', '8');

        
    })
    it ('Should finish up', async () => {
        await LoginPage.finishingUP();

        await expect(SecurePage.finishCheckout).toBeExisting();
    })
})
//logging out
describe('Logging out', () => {
    it('should successfully log out', async () => {
        await LoginPage.loggingOut();
    });
})

