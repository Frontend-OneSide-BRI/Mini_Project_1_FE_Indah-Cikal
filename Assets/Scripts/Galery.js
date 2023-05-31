import data from "./data.js";

const content = document.getElementById("filtered-content");
const modal = document.getElementById("modal-container");

function renderCard(item) {
  content.innerHTML += `
          <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2">
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
  content.innerHTML = "";
  category === "All"
    ? data.map((item) => renderCard(item))
    : data
        .filter((item) => item.category === category)
        .map((item) => renderCard(item));
}

const allPost = document.getElementById("all-post");
const mostPopular = document.getElementById("most-popular");
const personalFav = document.getElementById("personal-fav");

function getAllPost() {
  allPost.classList.add("active");
  mostPopular.classList?.remove("active");
  personalFav.classList?.remove("active");
  filtered("All");
}

function getMostPopular() {
  mostPopular.classList.add("active");
  allPost.classList?.remove("active");
  personalFav.classList?.remove("active");
  filtered("Most Popular");
}

function getPersonalFav() {
  personalFav.classList.add("active");
  allPost.classList?.remove("active");
  mostPopular.classList?.remove("active");
  filtered("Personal Favorite");
}

allPost.addEventListener("load", filtered("All"));
allPost.addEventListener("click", getAllPost);
mostPopular.addEventListener("click", getMostPopular);
personalFav.addEventListener("click", getPersonalFav);
