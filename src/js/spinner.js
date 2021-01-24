import refs from "./refs.js";

export default {
  show() {
    refs.spinner.classList.remove("is-hidden");
  },
  hide() {
    refs.spinner.classList.add("is-hidden");
  },
};
