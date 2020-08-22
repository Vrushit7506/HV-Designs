//console.log("Hello");

const filling = document.getElementsByClassName("percentage");

window.onscroll = function () {
  var top1 = window.scrollY;
  if (top1 >= 1200 && top1 <= 3500) {
    for (let i = 0; i < filling.length; i++) {
      filling[i].classList.add("fillBar");
    }
  } else {
    for (let i = 0; i < filling.length; i++) {
      filling[i].classList.remove("fillBar");
    }
  }
};
