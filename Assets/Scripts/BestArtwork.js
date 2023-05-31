import data from "./data.js";

const content = document.getElementById("filtered-content");
const modal = document.getElementById("modal-container");

function renderCard(item) {
  content.innerHTML += `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modal-${item.id}">
              <div class="container-card rounded-4">
                <img class="image" src="${item.src}" />
                <div class="overlay">
                  <div class="text">
                    <h5 class="fw-bold">${item.title}</h5>
                    <p class="more-info">
                      Learn more <i class="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
            `;
  modal.innerHTML += `
        <div class="modal fade" id="modal-${item.id}" >
          <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content rounded-4">
              <div class="modal-body text-center p-4">
                <h5 class="fw-bold">${item.title}</h5>
                <p> Categorized as Our ${item.category}</p>
                <img class="image-modal rounded-4" src="${item.src}" />
              </div>
            </div>
          </div>
        </div>`;
}

function filtered(category) {
  data
    .filter((item) => item.category === category)
    .map((item) => renderCard(item));
}

const bestArtwork = document.querySelector(".best-artwork #filtered-content");

bestArtwork.addEventListener("load", filtered("Best Artwork"));
