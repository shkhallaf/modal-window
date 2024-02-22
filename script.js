"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closerModal = document.querySelector(".close-modal");
const butnsOpenModal = document.querySelectorAll(".open-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < butnsOpenModal.length; i++) {
  butnsOpenModal[i].addEventListener("click", openModal);
}
closerModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
