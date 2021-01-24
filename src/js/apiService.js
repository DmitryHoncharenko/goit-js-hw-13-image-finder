import notify from "./notify.js";
import spinner from "./spinner.js";

export default {
  cardName: "",
  page: 1,
  perPage: 12,
  totalPages: 0,
  isLastPage: false,

  fetchCards() {
    const BASE_URL =
      "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
    const key = "19950842-e9475e8be2456b5a8d0ce08fb";
    return fetch(
      `${BASE_URL}&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${key}`,
    )
      .then((response) => response.json())
      .then(({ hits, totalHits }) => {
        this.totalPages = Math.ceil(totalHits / this.perPage);

        if (this.totalPages === this.page) {
          this.isLastPage = true;
        } else {
          this.isLastPage = false;
        }
        if (!this.totalPages) {
          notify();
          spinner.hide();
          return Promise.reject("Error");
        }
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.cardName;
  },
  set query(value) {
    this.cardName = value;
  },
};
