$(document).ready(function () {
  $(".body-award__wrapper").on("click", function () {
    $(".answers").toggleClass("show");
  });
  $(".completed-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // swap slides in ms
    speed: 700, // swap speed
    focusOnSelect: true,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});
const textarea = document.getElementById("message");
const limit = 160; //height limit in px
textarea.oninput = function () {
  textarea.style.height = "";
  textarea.style.height = `${Math.min(textarea.scrollHeight, limit)}px`;
};
