//Navbar Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// //nav hide
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function (a) {
//   a.addEventListener("click", function () {
//     navCollapse.classList.remove("show");
//   });
// });

//cards swiper
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

//cards;
var swiper = new Swiper(".relate-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});
