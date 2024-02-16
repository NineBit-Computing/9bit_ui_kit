// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
// eslint-disable-next-line no-unused-vars
import * as CardComponent from './components/card/card';
import { CardConfig } from './components/card/config';
import * as ImageBrowserComponent from './components/imageBrowser/imageBrowser'
import { ImageBrowserConfig } from './components/imageBrowser/config';


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
        <h1>Welcome to ImageBrowser </h1>
        <imagebrowser-component data-options='${JSON.stringify(ImageBrowserConfig)}'></imagebrowser-component>
        `;
  }
}

customElements.define('app-component', AppComponent);
