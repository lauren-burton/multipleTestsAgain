import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
  
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    
    get addToCar () {
        return $('#add-to-cart-sauce-labs-backpack');

    }
    
    get shoppingCart() {
        return $('#shopping_cart_container');
    }
    get firstCheckout() {
        return $('#checkout')
    }

    get firstName () {
        return $('#first-name')
    }

    get lastName () {
        return $('#last-name')
    }

    get zipCode() {
        return $('#postal-code')
    }

    get secondCheckout() {
        return $('#continue')
    }

    get finish() {
        return $('#finish')
    }

    get hamburgerMenu () {
        return $('#react-burger-menu-btn')
    }

    get logoutBtn () {
        return $('#logout_sidebar_link')
    }

    get goBack (){
        return $('#continue-shopping')
    }
    async login (someUsername, thePassword) {
        await this.inputUsername.setValue(someUsername);
        await this.inputPassword.setValue(thePassword);
        await this.btnSubmit.click();
    }

    async login (theUsername, somePassword) {
        await this.inputUsername.setValue(theUsername);
        await this.inputPassword.setValue(somePassword);
        await this.btnSubmit.click();
    }
    
    async stressTesting() {
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.shoppingCart).click();
        (await this.goBack).click();
    }
    async addToCart () {
        (await this.addToCar).click();
        (await this.shoppingCart).click();
       
    }
    
    async dontCheckout () {
        (await this.firstCheckout).click();
        (await this.secondCheckout).click();
    }
    async checkout (first, last, zip) {
        (await this.firstCheckout).click();
        (await this.firstName).setValue(first);
        (await this.lastName).setValue(last);
        (await this.zipCode).setValue(zip);
    }
    
    async finishingUP(){
       
        (await this.secondCheckout).click();
        (await this.secondCheckout).click();
        (await this.finish).click();
    }

    async loggingOut() {

        (await this.hamburgerMenu).click();
        (await this.logoutBtn).click();
    }
    
  
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
