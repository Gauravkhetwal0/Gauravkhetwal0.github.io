const swiper = new Swiper(".swiper-container", {
    speed: 400,
    effect: "flip",
    spaceBetween: 100,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 1
  });