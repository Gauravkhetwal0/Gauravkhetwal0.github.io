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
  
  // logo
//   const { styler, spring, listen, pointer, value } = window.popmotion;
  
//   const ball = document.querySelector(".brand");
//   const divStyler = styler(ball);
//   const ballXY = value({ x: 0, y: 0 }, divStyler.set);
  
//   listen(ball, "mousedown touchstart").start(e => {
//     e.preventDefault();
//     pointer(ballXY.get()).start(ballXY);
//   });
  
//   listen(document, "mouseup touchend").start(() => {
//     spring({
//       from: ballXY.get(),
//       velocity: ballXY.getVelocity(),
//       to: { x: 0, y: 0 },
//       stiffness: 200
//     }).start(ballXY);
//   });










// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// const galleryImgs = document.querySelectorAll('.gallery-img');

// let currentlySelected = 0;

// prevButton.addEventListener('click',function(){

// })

// nextButton.addEventListener('click',function(){
//     galleryImgs[currentlySelected].classList.remove('active');
//     currentlySelected++;
//     galleryImgs[currentlySelected].classList.add('active');
//     prevButton.disabled = false;

//     if(galleryImgs.length === currentlySelected +1)
//     {
//         nextButton.disabled = true;
//     }
// })