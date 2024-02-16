// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
// eslint-disable-next-line no-unused-vars
import * as CardComponent from './components/card/card';
import { CardConfig } from './components/card/config';

/**
 * Entry point for this application
 */
class AppComponent extends HTMLElement {
  /**
   * Constructor method
   */
  constructor() {
    super();
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    this.innerHTML = `
        <h1>Welcome to UI Kit</h1>
        <card-component 
          data-options='${JSON.stringify(CardConfig)}'>
        </card-component>
        `;
  }
}

customElements.define('app-component', AppComponent);
