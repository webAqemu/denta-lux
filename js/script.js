// first slider on index.html
$(".doctors__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: `<button type="button" class="doctors__arrow doctors__arrow--left"></button>`,
  nextArrow: `<button type="button" class="doctors__arrow doctors__arrow--right"></button>`,
});
// second slider on index.html
$(".certificates__inner").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  dotsClass: "certificates__dots",
});
// delete numbers from slider dots
document.querySelectorAll(".certificates__dots button").forEach((btn) => (btn.innerHTML = ""));
