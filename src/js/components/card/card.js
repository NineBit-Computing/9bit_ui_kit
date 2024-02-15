class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.options = JSON.parse(this.dataset.options);
        console.log(`Data set: ${this.options.title}`);
        // this.title = options.title;
    }

    connectedCallback() {
        const { title, description, imgSrc, altText} = this.options;
        this.innerHTML = `
        <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="${imgSrc}" alt="${altText}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
        `
    }
}

customElements.define('card-component', CardComponent);