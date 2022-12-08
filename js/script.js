let contactPopup = document.querySelector("#contact-popup");
let contactPopupButtonOpen = document.querySelector(
  "#contact-popup-button-open"
);
let contactPopupButtonClose = contactPopup.querySelector(
  "#contact-popup-button-close"
);
let contactPopupOverlay = document.querySelector(".popup-overlay");

contactPopupButtonOpen.addEventListener("click", (evt) => {
  evt.preventDefault();
  contactPopup.classList.toggle("popup-show");
});

contactPopupButtonClose.addEventListener("click", (evt) => {
  contactPopup.classList.toggle("popup-show");
});

contactPopupOverlay.addEventListener("click", (evt) => {
  contactPopup.classList.toggle("popup-show");
});
