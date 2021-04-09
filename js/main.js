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

  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  searchBtn.addEventListener('click', () => {
    mobileSearch.classList.add('is-open');
  });
  document.querySelector('.content').addEventListener('click', () => {
    mobileSearch.classList.remove('is-open');
  });

  if (document.documentElement.scrollWidth <= 640) {
    swiper1.destroy();
    swiper2.destroy();
    swiper3.destroy();
  }