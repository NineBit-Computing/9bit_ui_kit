// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as CardComponent from './components/card/card'
import { CardConfig } from './components/card/config';

class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>Welcome to UI Kit</h1>
        <card-component data-options='${JSON.stringify(CardConfig)}'></card-component>

        `
    }
}

customElements.define('app-component', AppComponent);