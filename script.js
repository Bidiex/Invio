const menuBtn = document.getElementById('navbar__menu-btn');
const closeBtn = document.getElementById('navbar__close-btn');
const navBarContent = document.getElementById('navbar-content'); 

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
  }else{
    navbarWrapper.classList.remove('scrolled');
    navbarToggle.classList.remove('scrolled');
    navbarMenuBtn.classList.remove('scrolled');
  }
});
