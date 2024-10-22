const hamburger = document.querySelector(".hamburger-div");
const hamburgerImage = document.querySelector(".icon-hamburger");
const nav = document.querySelector("nav");
const listDiv = document.querySelectorAll(".list-div");
const arrow = document.querySelectorAll(".icon-arrow");
const listContent = document.querySelectorAll(".list-content");
const header = document.querySelector("header");
const section = document.querySelector(".section__1");

let value = true;

hamburger.addEventListener("click", () => {
  if (value) {
    hamburgerImage.src = "./images/icon-close.svg";
  } else {
    hamburgerImage.src = "./images/icon-hamburger.svg";
  }
  value = !value;

  nav.classList.toggle("nav-close");
  listContent.forEach((e) => {
    e.classList.remove("open-list");
  });
  arrow.forEach((e) => {
    e.classList.remove("arrow-transform");
  });
});


// Nav link accordion
listDiv.forEach((e) => {
  e.addEventListener("click", (event) => {
    
    if (
      (event.target.nodeName === "DIV" ||
        event.target.nodeName === "SPAN" ||
        event.target.nodeName === "IMG") &&
      e.nextElementSibling.classList.contains("open-list")
    ) {
      e.nextElementSibling.classList.remove("open-list");
      e.childNodes[5].classList.remove("arrow-transform");
    } else if (
      event.target.nodeName === "DIV" ||
      event.target.nodeName === "SPAN" ||
      event.target.nodeName === "IMG"
    ) {
      listContent.forEach((e) => {
        e.classList.remove("open-list");
      });
      arrow.forEach((e) => {
        e.classList.remove("arrow-transform");
      });
      e.nextElementSibling.classList.toggle("open-list");
      e.childNodes[5].classList.toggle("arrow-transform");
    }
  });
});

const options = {
  rootMargin: "-12%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("new-styles");
    } else {
      header.classList.add("new-styles");
    }
  });
});

observer.observe(section);
