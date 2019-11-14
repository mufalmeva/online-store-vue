import { imagePath } from '@/mixins/imagePath.js'

export const viewProduct = {
	methods:{
		quickViewProduct(product, event){
			var sliderFinalWidth = 400,
				maxQuickWidth = 900;

			var selectedImage = $(event.target).parent('.cd-item').children('a').children('img'),
				slectedImageUrl = imagePath.methods.makeImagePath(product);

			$('body').addClass('overlay-layer');
			$('.cd-quick-view .cd-slider li').removeClass('selected');
			$('.cd-quick-view .cd-slider li img').attr('src',slectedImageUrl);
			$('.cd-quick-view .cd-slider li').addClass('selected');
			this.selectedProduct = product;
			animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');
			updateQuickView(slectedImageUrl);

			//close the quick view panel
			$('body').on('click', function(event){
				if( $(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
					closeQuickView( sliderFinalWidth, maxQuickWidth);
				}
			});
			$(document).keyup(function(event){
				//check if user has pressed 'Esc'
				if(event.which=='27'){
					closeQuickView( sliderFinalWidth, maxQuickWidth);
				}
			});

			//quick view slider implementation
			$('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
				updateSlider($(this));
			});

			//center quick-view on window resize
			$(window).on('resize', function(){
				if($('.cd-quick-view').hasClass('is-visible')){
					window.requestAnimationFrame(resizeQuickView);
				}
			});

			function updateSlider(navigation) {
				var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
					activeSlider = sliderConatiner.children('.selected').removeClass('selected');
				if ( navigation.hasClass('cd-next') ) {
					( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected');
				} else {
					( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
				}
			}

			function updateQuickView(url) {
				$('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
			}

			function resizeQuickView() {
				var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
					quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;
				$('.cd-quick-view').css({
					"top": quickViewTop,
					"left": quickViewLeft,
				});
			}

			function closeQuickView(finalWidth, maxQuickWidth) {
				var close = $('.cd-close'),
					activeImage = close.siblings('.cd-slider-wrapper').find('.selected img'),
					activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
					selectedImage = $('.empty-box').find('img');
				//update the image in the gallery
				if( !$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
					animateQuickView(activeImage, finalWidth, maxQuickWidth, 'close');
				} else {
					closeNoAnimation(activeImage, finalWidth, maxQuickWidth);
				}
			}

			function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
				//store some image data (width, top position, ...)
				//store window data to calculate quick view panel position
				var parentListItem = image.parent('.cd-item'),
					topSelected = image.offset().top - $(window).scrollTop(),
					leftSelected = image.offset().left,
					widthSelected = image.width(),
					heightSelected = image.height(),
					windowWidth = $(window).width(),
					windowHeight = $(window).height(),
					finalLeft = (windowWidth - finalWidth)/2,
					finalHeight = finalWidth * heightSelected/widthSelected,
					finalTop = (windowHeight - finalHeight)/2,
					quickViewWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
					quickViewLeft = (windowWidth - quickViewWidth)/2;

				if( animationType == 'open') {
					//hide the image in the gallery
					parentListItem.addClass('empty-box');
					//place the quick view over the image gallery and give it the dimension of the gallery image
					$('.cd-quick-view').css({
						"top": topSelected,
						"left": leftSelected,
						"width": widthSelected,
					}).velocity({
						//animate the quick view: animate its width and center it in the viewport
						//during this animation, only the slider image is visible
						'top': finalTop+ 'px',
						'left': finalLeft+'px',
						'width': finalWidth+'px',
					}, 1000, [ 400, 20 ], function(){
						//animate the quick view: animate its width to the final value
						$('.cd-quick-view').addClass('animate-width').velocity({
							'left': quickViewLeft+'px',
							'width': quickViewWidth+'px',
						}, 300, 'ease' ,function(){
							//show quick view content
							$('.cd-quick-view').addClass('add-content');
						});
					}).addClass('is-visible');
				} else {
					//close the quick view reverting the animation
					$('.cd-quick-view').removeClass('add-content').velocity({
						'top': finalTop+ 'px',
						'left': finalLeft+'px',
						'width': finalWidth+'px',
					}, 300, 'ease', function(){
						$('body').removeClass('overlay-layer');
						$('.cd-quick-view').removeClass('animate-width').velocity({
							"top": topSelected,
							"left": leftSelected,
							"width": widthSelected,
						}, 500, 'ease', function(){
							$('.cd-quick-view').removeClass('is-visible');
							parentListItem.removeClass('empty-box');
						});
					});
				}
			}
			// eslint-disable-next-line no-unused-vars
			function closeNoAnimation(image, finalWidth, maxQuickWidth) {
				var parentListItem = image.parent('.cd-item'),
					topSelected = image.offset().top - $(window).scrollTop(),
					leftSelected = image.offset().left,
					widthSelected = image.width();

				$('body').removeClass('overlay-layer');
				parentListItem.removeClass('empty-box');
				$('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
					"top": topSelected,
					"left": leftSelected,
					"width": widthSelected,
				});
			}
		},
		bindEvent(){
			$('.cd-item').on('mouseover', function(event) {
				$(this).css({
					'box-shadow': '5px 5px 5px 5px #eee'
				});
				var selected = $(this).children('.cd-trigger');
				selected.css({
					'opacity': 1,
					'text-shadow': '2px 2px 5px'

				});
			});
		},
		unbindEvent(){
			$('.cd-item').on('mouseout', function(event) {
				$(this).css({
					'box-shadow': 'none',
					'border': 'none'
				});
				var selected = $(this).children('.cd-trigger');
				selected.css({'opacity': 0});
			});
		}
	}
};
