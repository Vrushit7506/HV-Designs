const home = document.getElementsByClassName("Nav-Home");
const about = document.getElementsByClassName("Nav-About");
const skills = document.getElementsByClassName("Nav-Skills");
const projects = document.getElementsByClassName("Nav-Projects");
const contacts = document.getElementsByClassName("Nav-Contacts");

const filling = document.getElementsByClassName("percentage");
const header1 = document.getElementsByTagName("header");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header1[0].classList.add("nav-scrolled");
  } else if (top < 100) {
    header1[0].classList.remove("nav-scrolled");
  }
  if (top >= -10 && top < 800) {
    home[0].classList.add("active");
  } else if (top >= 800) {
    home[0].classList.remove("active");
  }
  if (top >= 800 && top < 1500) {
    about[0].classList.add("active");
  } else {
    about[0].classList.remove("active");
  }
  if (top >= 1500 && top < 3500) {
    skills[0].classList.add("active");
  } else {
    skills[0].classList.remove("active");
  }
  if (top >= 3500 && top < 4900) {
    projects[0].classList.add("active");
  } else {
    projects[0].classList.remove("active");
  }
  if (top >= 4900 && top < 6600) {
    contacts[0].classList.add("active");
  } else {
    contacts[0].classList.remove("active");
  }
  if (top >= 1500 && top <= 2800) {
    for (let i = 0; i < filling.length; i++) {
      filling[i].classList.add("fillBar");
    }
  } else {
    for (let i = 0; i < filling.length; i++) {
      filling[i].classList.remove("fillBar");
    }
  }
};
