import { $ } from '@wdio/globals'
import Page from './page.js';


class SecurePage extends Page {
  
    get inventoryList () {
        return $('#item_4_title_link');
    }

    get stayOnPage () {
        return $('.error-button')
    }

    get cartAdd () {
        return $('.shopping_cart_badge')
    }

    get finishCheckout() {
        return $('#checkout_complete_container')

    }
    
    get refuseToCheckout() {
        return $('.error-message-container.error')
    }
}

export default new SecurePage();
