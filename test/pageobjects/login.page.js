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
  
    async addToCart () {
        (await this.addToCar).click();
    }
  
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
