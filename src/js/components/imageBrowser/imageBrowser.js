/**
 * Custom element definition for CardComponent
 */
class ImageBrowserComponent extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();
    this.options = JSON.parse(this.dataset.options);
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    const { imgSrc } = this.options;

    // Include Bootstrap CSS within the component
    this.innerHTML = `
    
      <div class="container mt-4 mb-4">
        <div class="row">
          <div class="col-md-3">
            <h5>Related Media</h5>
            <div class="related-media"></div>
          </div>
          <div class="col-md-9">
            <img class="main-image img-fluid mb-3" src="${imgSrc[0]}">
          </div>
        </div>
      </div>
    `;

    const relatedMediaContainers = this.querySelectorAll('.related-media');

    imgSrc.forEach((mediaURL, index) => {
      const img = this.ownerDocument.createElement('img');
      img.src = mediaURL;
      img.classList.add('img-fluid', 'img-thumbnail');

      // Add click listener to load media into main image
      img.addEventListener('click', () => {
        const mainImage = this.querySelector('.main-image');
        mainImage.src = mediaURL;
      });

      // Add hover listener to change main image on hover
      img.addEventListener('mouseover', () => {
        const mainImage = this.querySelector('.main-image');
        mainImage.src = mediaURL;
      });

      // Append the 'img' element to the container selected based on the
      // current index
      relatedMediaContainers[index % relatedMediaContainers.length].appendChild(
        img,
      );
    });
  }
}

customElements.define('imagebrowser-component', ImageBrowserComponent);
