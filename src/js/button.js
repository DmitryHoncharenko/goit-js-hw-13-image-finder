import refs from "./refs.js";

export default {
  show() {
    refs.button.classList.remove("is-hidden");
  },
  hide() {
    refs.button.classList.add("is-hidden");
  },
};
