var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

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
  
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };

  

