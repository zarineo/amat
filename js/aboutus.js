const body = document.querySelector("body");
const animatedMainPageSections = document.querySelectorAll(".animated-section");

const favoriteSwiperOptionsMobile = {
  effect: "coverflow",
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  direction: "horizontal",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: false,
  },
  pagination: {
    el: ".create .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
  },
};

const favoriteSwiperOptionsDesktop = {
  slidesPerView: 1,
  direction: "vertical",
  pagination: {
    el: ".create .swiper-pagination",
    clickable: true,
  },
};

let favoritesSwiper;
let perSwiperEffect;

function favoritesSwiperMode() {
  let screenWidth = window.innerWidth;
  let swiperEffect = screenWidth < 768 ? "coverflow" : "slide";
  let options =
    screenWidth < 768
      ? favoriteSwiperOptionsMobile
      : favoriteSwiperOptionsDesktop;

  if (!perSwiperEffect && !favoritesSwiper) {
    perSwiperEffect = swiperEffect;
    favoritesSwiper = new Swiper(".create .swiper", options);
    return favoritesSwiper;
  }

  if (perSwiperEffect !== swiperEffect) {
    perSwiperEffect = swiperEffect;
    if (favoritesSwiper && favoritesSwiper.destroy) {
      favoritesSwiper.destroy(true, true);
    }
    favoritesSwiper = new Swiper(".create .swiper", options);
  }
  return favoritesSwiper.pagination;
}

window.addEventListener("resize", () => {
  let favoritesSwiperBullets = favoritesSwiperMode();
  // console.log(favoritesSwiperBullets[0])
  eventsSwiperMode();
});

document.addEventListener("DOMContentLoaded", () => {
  let favoritesSwiperBullets = favoritesSwiperMode();
  // favoritesSwiperMode();
  eventsSwiperMode();
});

//swiper for articles and events
let eventsSwiper;

function eventsSwiperMode() {
  let screenWidth = window.innerWidth;
  if (screenWidth > 800) {
    if (!eventsSwiper) {
      eventsSwiper = new Swiper(".events .swiper", {
        slidesPerView: 2.5,
        loop: true,
        spaceBetween: 30,
      });
    }
  } else {
    if (eventsSwiper && eventsSwiper.destroy) {
      eventsSwiper.destroy(true, true);
    }
  }
}

new Swiper(".articles .swiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 156,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: false,
  },
  pagination: {
    el: ".articles .swiper-pagination",
  },
});

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  animatedMainPageSections.forEach((block) => {
    const blockPosition = block.getBoundingClientRect().top;
    if (blockPosition <= 0.4 * windowHeight) {
      const transfromAnimatedItems = block.querySelectorAll(".transform-text__animated");
      const blockAnimatedItems = block.querySelectorAll(".block__animated");

      transfromAnimatedItems.forEach((item) => {
        item.classList.add("is--active");
      });
      blockAnimatedItems.forEach((item) => {
        item.classList.add("is--active");
      });
    }
  });
});


//моя ерундашка
const textBlocks = document.querySelectorAll('.create__swiper-text-block');
favoritesSwiperBullets = favoritesSwiperMode();
console.log(favoritesSwiperBullets);
console.log(favoritesSwiperBullets.activeIndex);
console.log(favoritesSwiperBullets.pagination);

const bullets = document.querySelectorAll('.create .swiper-pagination-bullet');
console.log(bullets);

// const check = () => {
//   for (let i = 0; i < textBlocks.length; i++){
//     if (bullets[i].classList.contains('swiper-pagination-bullet-active')){
//       textBlocks[i].classList.add('is--active');
//     } else {
//       textBlocks[i].classList.remove('is--active');
//     }
//   }
// }

//for (let i = 0; i < textBlocks.length; i++){
//bullets[i].addEventListener('click', () =>{
//   textBlocks.forEach(block =>{
//    block.classList.remove('is--active');
//   })
//   textBlocks[i].classList.add('is--active');
//})
//}

// for (let bullet of bullets){
//   bullet.addEventListener('click', check);
// }


//for (let i = 0; i < textBlocks.length; i++){
//bullets[i].addEventListener('click', () =>{
//    textBlocks.forEach(block =>{
//    block.classList.remove('is--active');
//    })
//    textBlocks[i].classList.add('is--active');
//})
//}


for (let i = 0; i < textBlocks.length; i++) {
  favoritesSwiper.on('slideChange', () => {
    if (bullets[i].classList.contains('swiper-pagination-bullet-active')) {
      textBlocks.forEach(block => {
        block.classList.remove('is--active');
      })
      textBlocks[i].classList.add('is--active');
    }
  })
}








