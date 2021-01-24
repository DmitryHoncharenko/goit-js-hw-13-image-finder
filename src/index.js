import css from "./css/styles.css";
import card from "./template/imgCard.hbs";
import refs from "./js/refs.js";
import apiService from "./js/apiService.js";
import loadLightBox from "./js/basiclightbox.js";
import button from "./js/button.js";
import spinner from "./js/spinner.js";

refs.searchForm.addEventListener("submit", findCards);
refs.button.addEventListener("click", loadMoreCards);

function renderCard(cardName) {
  const iconCard = card(cardName);
  refs.gallery.insertAdjacentHTML("beforeend", iconCard);
  button.show();
  refs.gallery.addEventListener("click", loadLightBox);
}

function findCards(event) {
  event.preventDefault();

  button.hide();
  spinner.show();

  const input = refs.searchForm;
  apiService.query = input.elements.query.value;
  clearInput();
  searchLastPage();
}

function loadMoreCards() {
  button.hide();
  spinner.show();
  apiService.incrementPage();
  searchLastPage();
}

function clearInput() {
  refs.gallery.innerHTML = "";
  apiService.resetPage();
}

function searchLastPage() {
  apiService
    .fetchCards()
    .then((data) => {
      renderCard(data);
      spinner.hide();
      if (apiService.isLastPage) {
        button.hide();
      }
      if (apiService.page > 1) {
        window.scrollBy({
          top: window.innerHeight - 40,
          behavior: "smooth",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
