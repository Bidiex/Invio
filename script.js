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
  if(window.scrollY > 10){
    navbarWrapper.classList.add('scrolled');
    navbarToggle.classList.add('scrolled');
    navbarMenuBtn.classList.add('scrolled');
    closeBtn.classList.add('scrolled');
  }else{
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
