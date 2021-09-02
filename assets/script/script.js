$(document).ready(function () {
  $(".body-award__wrapper").on("click", function () {
    $(".answers").toggleClass("show");
  });
});
const textarea = document.getElementById("message");
if (textarea) {
  const limit = 160; //height limit in px
  textarea.oninput = function () {
    textarea.style.height = "";
    textarea.style.height = `${Math.min(textarea.scrollHeight, limit)}px`;
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  console.log(lazyVideos);
  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {


      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
