var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type : "fraction",

    },
    autoplay:{
        delay : 3500,
        disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect : "creative",
    creativeEffect : {
        prev : {
            shadow : true,
            translate : [0 , 0-400],
        },
        next : {
            translate : ["100%" , 0 , 0],

        }
    }
  });