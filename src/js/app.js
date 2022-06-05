const modal = document.querySelector(".modal");
const btnSpiderman = document.querySelector(".btn-spiderman");
const btnClose = document.querySelector(".btn-close");

btnSpiderman.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

btnClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
