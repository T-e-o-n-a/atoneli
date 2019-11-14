var swiper1 = new Swiper('.s1', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


var swiper2 = new Swiper('.s2', {
  
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// var x = document.querySelector("")