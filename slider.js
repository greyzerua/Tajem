var swiperText = new Swiper(".textSwiper", {
      slidesPerView: 1,
      loop: true,
      resizeObserver: true,
      slideToClickedSlide: true,
      resizeObserver: true,
      updateOnWindowResize: true,
      observer: true,
      observeParents: true
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: -60,
      loop: true,
      resizeObserver: true,
      slideToClickedSlide: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      resizeObserver: true,
      updateOnWindowResize: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4
        }
      },
      on: {
        init: function(){
          console.log(this); // Swiper
          swiperText.slideToLoop(this.realIndex);
        },
      }
    });


swiper.on('slideChange', function (params) {
  // console.log('slide changed', params.realIndex);
  swiperText.slideToLoop(params.realIndex);
});

swiperText.on('slideChange', function (params) {
  console.log('slide text changed', params.realIndex, swiper.realIndex);
  swiper.slideToLoop(params.realIndex);
});
  