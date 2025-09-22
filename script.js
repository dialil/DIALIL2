// ========================
// ANIMATIONS HERO
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const titre = document.querySelector("h1");
  titre.style.opacity = "0";
  titre.style.transform = "translateY(30px)";

  setTimeout(() => {
    titre.style.transition = "all 1s ease";
    titre.style.opacity = "1";
    titre.style.transform = "translateY(0)";
  }, 300);

  const video = document.querySelector(".logo-video");
  video.style.opacity = "0";
  video.style.transform = "translateY(30px)";

  setTimeout(() => {
    video.style.transition = "all 1.2s ease";
    video.style.opacity = "1";
    video.style.transform = "translateY(0)";
  }, 100);
});

// ========================
// CAROUSEL
// ========================
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function updateCarousel() {
  const width = items[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

// Swipe mobile
let startX = 0;
track.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
track.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) nextBtn.click();
  if (startX < endX - 50) prevBtn.click();
});

// ========================
// MODE SOMBRE / CLAIR
// ========================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeToggle.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});