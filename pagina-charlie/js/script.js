document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".carousel-item img");
  lazyImages.forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
});
