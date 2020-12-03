import "./index.scss";
import "swiper/swiper-bundle.css";
import "./scripts/swiper";

const headerNav = document.querySelector(".header__nav");
const headerNavOpen = document.querySelector(".header__open");
const sketchsLink = document.getElementById("SKETCHES");
const singUpLink = document.getElementById("SIGN_UP");

headerNavOpen.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav_off");
  });

headerNav.addEventListener("click", (event) => {
  if (event.target == sketchsLink) {
    document.querySelector(".main").scrollIntoView({ block: "start", behavior: "smooth" });
  } else if (event.target == singUpLink) {
    document.querySelector(".footer").scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
