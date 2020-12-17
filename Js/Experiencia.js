wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Splide( '.splide', {
    perPage : 2,
    cover   : true,
    lazyLoad: 'nearby',
    autoplay: 'true',
    resetProgress: 'true',
    height  : '20rem',
    type: 'loop',
    speed: 3,
    breakpoints: {
      height: '8rem',
    }
  } ).mount();

