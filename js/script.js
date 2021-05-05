// first slider on index.html
$(".doctors__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: `<button type="button" class="doctors__arrow doctors__arrow--left"></button>`,
  nextArrow: `<button type="button" class="doctors__arrow doctors__arrow--right"></button>`,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// second slider on index.html
$(".certificates__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  dotsClass: "certificates__dots",
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// delete numbers from slider dots
document.querySelectorAll(".certificates__dots button").forEach((btn) => (btn.innerHTML = ""));

// header burger
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");
});

// toggle header__hover
const headerList = document.querySelector(".menu__item--list");
headerList.addEventListener("click", function () {
  document.querySelector(".header__hover").classList.toggle("active");
  document.querySelector(".header__hover-icon").classList.toggle("active");
});
