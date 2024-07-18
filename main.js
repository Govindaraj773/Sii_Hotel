const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


///////// FAQ JS Code is here ////////////////

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
          const answer = item.querySelector('.faq-answer');
          const isVisible = answer.style.display === 'block';
          
          // Hide all answers
          faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none');
          
          // Toggle the clicked answer
          answer.style.display = isVisible ? 'none' : 'block';
      });
  });
});



// auto submenu opening JS code

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          const submenu = item.querySelector('.submenu');
          if (submenu) {
              submenu.style.display = 'block';
          }
      });

      item.addEventListener('mouseleave', () => {
          const submenu = item.querySelector('.submenu');
          if (submenu) {
              submenu.style.display = 'none';
          }
      });
  });
});


// Slide-show JS code

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// //////////////////////////////Sub Menu JS code is here
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          const submenu = item.querySelector('.submenu');
          if (submenu) {
              submenu.style.display = 'block';
          }
      });

      item.addEventListener('mouseleave', () => {
          const submenu = item.querySelector('.submenu');
          if (submenu) {
              submenu.style.display = 'none';
          }
      });
  });
});
