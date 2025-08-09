const menuBtn = document.getElementById('navbar__menu-btn');
const closeBtn = document.getElementById('navbar__close-btn');
const navBarContent = document.getElementById('navbar-content');
const navBarLinks = document.querySelectorAll('.navbar__link a');

navBarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBarContent.classList.add('oculto');
    closeBtn.classList.add('oculto');
    menuBtn.classList.remove('oculto');
  })
});

menuBtn.addEventListener("click", () => {

  navBarContent.classList.remove('oculto');
  closeBtn.classList.remove('oculto');
  menuBtn.classList.add('oculto');
});

closeBtn.addEventListener("click", () => {

  navBarContent.classList.add('oculto');
  closeBtn.classList.add('oculto');
  menuBtn.classList.remove('oculto');
});


const navbarWrapper = document.querySelector('.wrapper-navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenuBtn = document.querySelector('#navbar__menu-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbarWrapper.classList.add('scrolled');
    navbarToggle.classList.add('scrolled');
    navbarMenuBtn.classList.add('scrolled');
    closeBtn.classList.add('scrolled');
  } else {
    navbarWrapper.classList.remove('scrolled');
    navbarToggle.classList.remove('scrolled');
    navbarMenuBtn.classList.remove('scrolled');
    closeBtn.classList.remove('scrolled');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".testimonial-container");
  const btnLeft = document.querySelector(".slider-arrow.left");
  const btnRight = document.querySelector(".slider-arrow.right");

  // Detectar el ancho de una tarjeta (incluyendo el gap)
  const getCardWidth = () => {
    const card = container.querySelector(".testimonial-item");
    const cardStyle = getComputedStyle(card);
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    return card.offsetWidth + gap;
  };

  btnRight.addEventListener("click", () => {
    container.scrollBy({
      left: getCardWidth(),
      behavior: "smooth"
    });
  });

  btnLeft.addEventListener("click", () => {
    container.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth"
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider-input');
  const prevBtn = document.querySelector('.arrow-prev');
  const nextBtn = document.querySelector('.arrow-next');
  const indicators = document.querySelectorAll('.indicator');
  const slideElements = document.querySelectorAll('.slide');

  let currentSlide = 3; // Empezamos en el slide 3 (índice 2, pero currentSlide usa 1-based)

  function updateSlider(slideNumber) {
    // Desmarcar todos los slides
    slides.forEach(slide => slide.checked = false);

    // Marcar el slide actual
    document.getElementById(`slide${slideNumber}`).checked = true;
    currentSlide = slideNumber;
  }

  // Navegación con flechas
  prevBtn.addEventListener('click', function () {
    const prevSlide = currentSlide > 1 ? currentSlide - 1 : 5;
    updateSlider(prevSlide);
  });

  nextBtn.addEventListener('click', function () {
    const nextSlide = currentSlide < 5 ? currentSlide + 1 : 1;
    updateSlider(nextSlide);
  });

  // Navegación con indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
      updateSlider(index + 1);
    });
  });

  // Navegación con slides clickeables
  slideElements.forEach((slide, index) => {
    slide.addEventListener('click', function () {
      updateSlider(index + 1);
    });
  });

  // Navegación con teclado
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });  
});




