let btn = document.querySelector(".btn");
let popUp = document.querySelector(".pop_up");
let closePop = document.querySelector(".slosePop_btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.add("popUp-active");
});

closePop.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.remove("popUp-active");
});
