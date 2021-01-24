import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

function loadLightBox(event) {
  event.preventDefault();
  const img = event.target;
  const imgBigUrl = img.attributes.data.nodeValue;
  const instance = basicLightbox.create(
    `<img src= ${imgBigUrl} width="800" height="600">`,
  );
  instance.show();
}

export default loadLightBox;
