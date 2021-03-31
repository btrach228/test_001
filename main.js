const btn = document.querySelector(".btn");
const popUp = document.querySelector(".pop_up");
const closePop = document.querySelector(".slosePop_btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.add("popUp-active");
});

closePop.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.remove("popUp-active");
});
