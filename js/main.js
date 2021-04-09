const swiper1 = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      1800: {
        slidesPerView: 2,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });

  const swiper2 = new Swiper('.slider-2', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-2-next',
      prevEl: '.slider-2-prev',
    },
  
  });

  const swiper3 = new Swiper('.slider-3', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      1800: {
        slidesPerView: 2,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.slider-3-next',
      prevEl: '.slider-3-prev',
    },
  
  });