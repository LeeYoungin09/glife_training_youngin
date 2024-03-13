var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swi = new Swi(".mySwi", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swi-pagination",
    clickable: true,
  },
});
