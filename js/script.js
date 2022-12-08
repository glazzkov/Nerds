//#region popup

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

//#endregion popup

//#region slider

let slider = document.querySelector(".slider");
let slideList = slider.querySelectorAll(".slide");
let sliderButtonList = slider.querySelectorAll(".slider-pagination-button");

let changeSlide = function (slideNumber) {
  for (let i = 0; i < slideList.length; i++) {
    sliderButtonList[i].disabled = false;
    slideList[i].classList.remove("slide-show");
  }
  sliderButtonList[slideNumber].disabled = true;
  slideList[slideNumber].classList.add("slide-show");
  console.log(slideNumber);
};

for (let i = 0; i < slideList.length; i++) {
  sliderButtonList[i].addEventListener("click", (evt) => {
    changeSlide(i);
  });
}
//#endregion slider
