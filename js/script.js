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

// Dinamically import instagram images

const url =
  "https://graph.finstagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJVN05qVFFzemVNNXdoeU9nOXJ0MjctR2VnZAC1BSHVWUWxfV2REWm5NWWFUN01Nby16T1ZARdXZAHTVVmUnVfUEN3R2ZAOTVFxVS1LWko2cGU1bEZASVXhmYjhpbFptOVduOUlYY0xmOHlJUktudDRkagZDZD";

let images = [];
const insta = document.querySelector(".instagram .images");

async function instaAccess() {
  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.data.map((item) => {
    insta.innerHTML += `<img src=${item.media_url} alt=${item.id}>`;
  });
}

instaAccess();
