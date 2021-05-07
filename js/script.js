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

// video play in short-about section
if (document.querySelector(".short-about__play")) {
  const playBtn = document.querySelector(".short-about__play");
  const vid = document.getElementById("video");

  if (playBtn.addEventListener) {
    playBtn.addEventListener("click", play, false);
  } else if (playBtn.attachEvent) {
    playBtn.attachEvent("onclick", play);
  }

  function play() {
    if (vid.paused) {
      vid.play();
      playBtn.classList.toggle("active");
    } else {
      vid.pause();
      playBtn.classList.toggle("active");
    }
  }
}
// tabs on about.html
const tabsBtnsContainer = document.querySelector(".about__tabs-inner");
const tabsBtns = document.querySelectorAll(".about__tab");
const tabsContent = document.querySelectorAll(".about__content");
if (tabsBtnsContainer) {
  tabsBtnsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("about__tab")) {
      tabsBtns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      tabsContent.forEach((content) => content.classList.remove("active"));
      document.querySelector(`.about__content--${e.target.dataset.tab}`).classList.add("active");
    }
  });
}
