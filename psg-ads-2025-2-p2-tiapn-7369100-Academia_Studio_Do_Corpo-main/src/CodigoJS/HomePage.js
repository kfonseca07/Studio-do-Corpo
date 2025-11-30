// ----- CARROSSEL DE IMAGENS -----
const images = document.querySelector('.carousel-images');
const total = images.children.length;
let index = 0;

function showSlide(i) {
  index = (i + total) % total;
  images.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));

// Troca automática a cada 5 segundos
setInterval(() => showSlide(index + 1), 5000);

// ----- MENU LATERAL -----
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});
