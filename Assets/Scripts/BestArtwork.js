import data from "./data.js";

const content = document.getElementById("filtered-content");

function filtered(category) {
  data
    .filter((item) => item.category === category)
    .map(
      (item) =>
        (content.innerHTML += `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2">
            <a href="#">
              <div class="container-card rounded-4">
                <img class="image" src="${item.src}" />
                <div class="overlay">
                  <div class="text">
                    <h5>${item.title}</h5>
                    <p>${item.category}</p>
                    <p class="more-info">
                      Learn more <i class="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
            `)
    );
}

const bestArtwork = document.querySelector(".best-artwork #filtered-content");

bestArtwork.addEventListener("load", filtered("Best Artwork"));
