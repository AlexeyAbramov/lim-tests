$(document).ready(function () {
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
