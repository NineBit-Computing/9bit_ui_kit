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
    const {
      title,
      showSearchBar,
      customEventName,
      searchPlaceholder,
      searchBtnText,
    } = this.options;
    let searchBarHTML = '';
    if (showSearchBar) {
      searchBarHTML = `
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" 
                    placeholder="${searchPlaceholder}" aria-label="Search">
                    <button class="btn 
                    btn-outline-success">${searchBtnText}</button>
                </div>
            `;
    }

    this.innerHTML = `
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
         <a class="navbar-brand" href="#">${title}</a>
         <button class="navbar-toggler" type="button" 
         data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent" aria-expanded="false" 
         aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Link</a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" 
               href="#" role="button" data-bs-toggle="dropdown" 
               aria-expanded="false">
                 Dropdown
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="#">Action</a></li>
                 <li><a class="dropdown-item" href="#">Another action</a></li>
                 <li><hr class="dropdown-divider"></li>
                 <li><a class="dropdown-item" 
                 href="#">Something else here</a></li>
               </ul>
             </li>
             <li class="nav-item">
               <a class="nav-link disabled" aria-disabled="true">Disabled</a>
             </li>
           </ul>
           ${searchBarHTML}
         </div>
       </div>
     </nav>
     </div>
        `;

    if (showSearchBar === true) {
      const searchInput = this.querySelector('input');
      const submitBtn = this.querySelector('.btn-outline-success');

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
    const searchEvent = new CustomEvent(customEventName, {
      detail: inputValue,
    });
    this.dispatchEvent(searchEvent);
    console.log('Custom Event raised with payload:', searchEvent.detail);
  }
}

customElements.define('toolbar-component', ToolbarComponent);
