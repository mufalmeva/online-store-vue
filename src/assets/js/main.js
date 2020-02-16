$(document).ready(function () {
  $(document).on('click', '.cd-quick-view .info-slider img', function(){
    updateSlider($(this));
  });
  function updateSlider(image) {
    var sliderContainer = image.parents('.info-slider'),
        activeSlider = sliderContainer.find('.selected').removeClass('selected'),
        slectedImageUrl = image.attr('src');
    image.addClass('selected');
    $('.cd-quick-view .main-img').attr('src',slectedImageUrl);
  }
})

export const sliderShow = function() {
  $('.info-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-left"></i> </button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-arrow-alt-circle-right"></i></button>',
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
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