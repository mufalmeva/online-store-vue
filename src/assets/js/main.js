
export const sliderShow = function() {
  $('.info-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-left"></i> </button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-right"></i></button>',
    arrows: true,
    dots: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}