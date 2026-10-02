const nav = document.getElementById("nav");
const toggle = document.querySelector(".menu-toggle");
const buttons = document.querySelectorAll(".lang");
const elements = document.querySelectorAll("[data-en]");

toggle?.addEventListener("click", () => nav.classList.toggle("open"));

function setLanguage(lang) {
  elements.forEach(el => {
    el.textContent = el.dataset[lang];
  });
  buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  localStorage.setItem("siteLanguage", lang);
}

buttons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

const saved = localStorage.getItem("siteLanguage") || "en";
setLanguage(saved);

document.getElementById("year").textContent = new Date().getFullYear();
