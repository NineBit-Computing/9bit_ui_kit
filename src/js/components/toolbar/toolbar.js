/**
 * Custom element definition for ToolbarComponent
 */
class ToolbarComponent extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();
    this.options = JSON.parse(this.dataset.options);
    console.log(`Data set: ${this.options.title}`);
    // this.title = options.title;
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    const { title,
      showSearchBar,
      customEventName,
      searchPlaceholder,
      searchBtnText,
      showUserIcon,
      titlePosition,
      searchBarPosition,
      userIconPosition,
      backgroundColor,
      titleFontSize,
      btnBackground,
      titleFontFamily,
      titleColor } = this.options;
    let searchBarHTML = '';
    let userIcon = '';
    const navTitle = `<a class="navbar-brand" href="#" 
    style=
    "font-size: ${titleFontSize? titleFontSize:'25px'}; 
    font-family: ${titleFontFamily? titleFontFamily:'Arial, sans-serif'}; 
    color: ${titleColor? titleColor:'#000'};"
    >${title}</a>`;

    if (showSearchBar) {
      searchBarHTML = `
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" 
                    placeholder="${searchPlaceholder}" aria-label="Search" 
                    style="max-width: 250px;">
                    <button class="btn searchBtn
                    btn-outline-${btnBackground?
                      btnBackground:'success'}">${searchBtnText}</button>
                </div>
            `;
    }

    if (showUserIcon) {
      userIcon = `
      <div style="height: 45px;">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height='45px'/>
      </div>
      `;
    }


    this.innerHTML = `
    <div>
      <nav class="navbar navbar-expand-lg 
      bg-${backgroundColor?backgroundColor:'light'}">
        <div class="container-fluid row justify-content-between">               
          <div class="col-md-4 leftDiv">
          </div>
          <div class="col-md-4 d-flex justify-content-center centerDiv">
          </div>
          <div class="col-md-4 d-flex justify-content-end rightDiv">        
          </div> 
        </div>    
      </nav>
    </div>
    `;

    this.getElementInDiv(titlePosition, navTitle);

    if (showUserIcon) {
      this.getElementInDiv(userIconPosition, userIcon);
    }

    if (showSearchBar === true) {
      this.getElementInDiv(searchBarPosition, searchBarHTML);
      const searchInput = this.querySelector('input');
      const submitBtn = this.querySelector('.searchBtn');

      submitBtn.addEventListener('click', () => {
        const inputValue = searchInput.value;
        this.handleInputSearch(inputValue, customEventName);
      });

      searchInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          const inputValue = searchInput.value;
          this.handleInputSearch(inputValue, customEventName);
        }
      });
    }
  }


  /**
   * Dispatches a search event.
   * @param {string} inputValue - The value to be included.
   * @param {string} customEventName - Name of custom Event.
   * @return {void}
   */
  handleInputSearch(inputValue, customEventName) {
    const searchEvent = new CustomEvent(customEventName,
        { detail: inputValue });
    this.dispatchEvent(searchEvent);
    console.log('Custom Event raised with payload:', searchEvent.detail);
  }

  /**
Sets the content of an element within a specified position div.
@param {string} position - The position of the element.
@param {string} content - The content to be inserted into the div.
*/
  getElementInDiv(position, content) {
    const divforItem = this.querySelector(`.${position}Div`);
    divforItem.innerHTML = content;
  }
}

customElements.define('toolbar-component', ToolbarComponent);
