// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
// eslint-disable-next-line no-unused-vars
import * as CardComponent from './components/card/card';
// eslint-disable-next-line no-unused-vars
import * as ImageBrowserComponent from './components/imageBrowser/imageBrowser';
// eslint-disable-next-line no-unused-vars
import * as ToolbarComponent from './components/toolbar/toolbar';
import { CardConfig } from './components/card/config';
import { ImageBrowserConfig } from './components/imageBrowser/config';
import { ToolbarConfig } from './components/toolbar/config';

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
        <toolbar-component
        data-options='${JSON.stringify(ToolbarConfig)}' 
        mycustomevent="handleSearch">
        </toolbar-component>
        <h1>Welcome to UI Kit</h1>
        <card-component 
          data-options='${JSON.stringify(CardConfig)}'>
        </card-component>
        <h1>Welcome to ImageBrowser </h1>
        <imagebrowser-component 
        data-options='${JSON.stringify(ImageBrowserConfig)}'>
        </imagebrowser-component>
        `;
  }
  /**
   *
   * @param {string} data
   */
  handleSearch=(data)=> {
    console.log('------------', data);
  };
}

customElements.define('app-component', AppComponent);

