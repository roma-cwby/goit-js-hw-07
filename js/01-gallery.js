import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", getGalleryMarkup(galleryItems));
gallery.addEventListener("click", showImg);

function getGalleryMarkup(imgs) {
  return imgs.reduce(
    (acc, img) =>
      acc +
      `<a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>`,
    ""
  );
}

function showImg(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  let instance = getModal(e);

  instance.show();
  document.addEventListener("keydown", closeModal);

  function closeModal(e) {
    if (e.key !== "Escape") return;
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}

function getModal(e) {
  if (e.target.classList.contains("gallery__link")) {
    const currentImg = document.querySelector(`[href="${e.target.href}"] img`);
    return basicLightbox.create(
      `<img src="${e.target.href}" alt="${currentImg.alt}" style="border-radius: 10px">`
    );
  }
  return basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}" style="border-radius: 10px">`
  );
}
