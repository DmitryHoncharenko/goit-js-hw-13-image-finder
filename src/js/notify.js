import { info } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

function notify() {
  info({
    title: "Sorry, but...",
    text: "your request is incorrect. \n  Please try one more time!",
    hide: true,
    delay: 2000,
  });
}

export default notify;
