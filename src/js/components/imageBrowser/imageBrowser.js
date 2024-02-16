class ImageBrowserComponent extends HTMLElement {
    constructor() {
        super();
        this.options = JSON.parse(this.dataset.options);
        console.log(`Data set: ${this.options.imgSrc}`);
        // this.title = options.title;
    }

    connectedCallback() {
        const { imgSrc, imgSrc1} = this.options;        
        this.innerHTML = `
        <div class="container mt-4 mb-4">
        <div class="row">
          <div class="col-md-3">
            <h5>Related Media</h5>
            <div id="relatedMedia">
              <!-- Related media will be appended here dynamically -->
            </div>
          </div>
          <div class="col-md-9">
            <img
              id="mainImage"
              src=${imgSrc1}"
              class="img-fluid mb-3"
            />
          </div>
        </div>
      </div>
        `
          // Function to load related media
      function loadRelatedMedia() {
        const relatedMediaContainer = document.getElementById("relatedMedia");
        imgSrc.forEach((mediaURL) => {
          const imgContainer = document.createElement("div");
          imgContainer.classList.add("mb-2");
          const img = document.createElement("img");
          img.src = mediaURL;
          img.classList.add(
            "img-fluid",
            "img-thumbnail",
            // "small-related-image"
          );
          // Add click listener to load media into main image
          img.addEventListener("click", () => {
            document.getElementById("mainImage").src = mediaURL;
          });
          // Add hover listener to change main image on hover
          img.addEventListener("mouseover", () => {
            document.getElementById("mainImage").src = mediaURL;
          });
          imgContainer.appendChild(img);
          relatedMediaContainer.appendChild(imgContainer);
        });
      }
        // Load related media on page load
        window.onload = loadRelatedMedia;
    }
}

customElements.define('imagebrowser-component', ImageBrowserComponent);