$(document).ready(function () {
  $(".body-award__wrapper").on("click", function () {
    $(".answers").toggleClass("show");
  });

  const textarea = document.getElementById("message");
  const limit = 160; //height limit in px

  textarea.oninput = function () {
    textarea.style.height = "";
    textarea.style.height = `${Math.min(textarea.scrollHeight, limit)}px`;
  };
});
