const btn = document.querySelector(".btn");
const popUp = document.querySelector(".pop_up");
const closePop = document.querySelector(".slosePop_btn");
const activeBtn = [btn, closePop];

activeBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    popUp.classList.toggle("popUp-active");
  });
});
