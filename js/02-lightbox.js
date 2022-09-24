import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", getGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

function getGalleryMarkup(imgs) {
  return imgs.reduce(
    (acc, img) =>
      acc +
      `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" title="${img.description}" />
</a>`,
    ""
  );
}
