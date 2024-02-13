// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as Header from './components/header'
import * as CardComponent from './components/card'


class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>Hello</h1>
        <app-header></app-header>
        <card-component></card-component>
        `
    }
}

customElements.define('app-component', AppComponent);