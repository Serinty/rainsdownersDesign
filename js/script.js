const menuArrow = document.querySelector(".submenu");
const toggleMobileNav = document.querySelector(".mobile-nav-toggle");
const navSmall = document.querySelector(".nav_small");
const logoImg = document.querySelector(".main-logo img");
const navInside = document.querySelector(".inside-nav");
const html = document.querySelector("html");
const blackBG = document.querySelector(".hide-mobile-menu");
const subnav = [...document.querySelectorAll(".inside-nav .submenu")];
const cross = document.querySelector(".cross");
const navBG = document.querySelector(".nav-bg");

// Toggle Hamburger
const hamburger = () => {
  toggleMobileNav.classList.toggle("toggle-mobile-menu");
  html.classList.toggle("hidden-overflow");
  blackBG.classList.toggle("toggle");
  navSmall.classList.toggle("nav-visibility");
  cross.classList.toggle("rotate-cross");
  navBG.classList.toggle("nav-bg-opacity");
};

cross.addEventListener("click", () => {
  toggleMobileNav.classList.remove("toggle-mobile-menu");
  html.classList.remove("hidden-overflow");
  blackBG.classList.remove("toggle");
  navSmall.classList.remove("nav-visibility");
  cross.classList.remove("rotate-cross");
  navBG.classList.remove("nav-bg-opacity");
});
// navbar shadow on scorll
window.addEventListener("scroll", () => {
  let width = document.body.clientWidth;
  // header Drop down
  if (window.scrollY > 20) {
    navInside.classList.add("drop-nav");
    logoImg.classList.add("logo-width");

    subnav.map((sub) => {
      sub.classList.add("sub-col");
    });
  } else {
    navInside.classList.remove("drop-nav");
    logoImg.classList.remove("logo-width");

    subnav.map((sub) => {
      sub.classList.remove("sub-col");
    });
  }
});

// Toggle Submenu
const submenu = (ele) => {
  const parent = ele.parentElement.parentElement;
  const svg = parent.querySelector(".arrow-svg");
  const submenu = parent.querySelector(".submenu");
  submenu.classList.toggle("toggle-height");
  svg.classList.toggle("rotate-svg");
};

// Get year
const d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

let vid = document.querySelector("#bg-video");
vid.onloadeddata = function () {
  vid.style.opacity = "100%";
};
const token =
  "IGQVJVYmV2MEliYnNNWUFSWkc5MmdjdkpZAZAWhzLV9mdHQydEQtZA3BLMTBYZAGg0d0dsNlo1WlhMZAmo5ZAzFMYlI1TTlHWHNZAaXE3QlhTcEwxZAlBPUjRkbTdGUmZAXaXVZAZAkpfOGpjSGZAGNC1UZAWhGTzY5agZDZD";

const extra =
  "EAAIV9hODDvABAP2ofSDPbUH8w4CfF87Ae8YYx8mrkILT2PZBWPVaFzM5doZCNwYgvkB6fjOi6sXqEZAQPK7EK2vESHXPULxD19fK3Guhka9Tvts8M8cBUpzzVX9L95fEq1mgadtsExJeviqFoQd21ZCaUTZB8lTfCVAFtvq28jWqEZCfBaopbK";

const appSecret = "c3437db0b81147a095dcce26731af73c";
// Dinamically import instagram images

const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`;

// const urlExtedn = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${appSecret}&access_token=${token}`;

let images = [];
const insta = document.querySelector(".instagram .images");

async function instaAccess() {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);

  jsonData.data.map((item) => {
    insta.innerHTML += `<img src=${item.media_url} alt=${item.id}>`;
  });
}

instaAccess();
