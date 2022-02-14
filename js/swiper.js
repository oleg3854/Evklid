const swiper = new Swiper('.swiper-container', {

  // pagination: {
  //   el: '.swiper-pagination',
  // },

 breakpoints: {
    768: {
		pagination: {
    		el: '.swiper-pagination',
  		}
    },

    1024: {
		pagination: {
    		el: null,
  		}
    }
  }
});