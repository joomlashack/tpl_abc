jQuery(document).ready(function($) {

	function setImages(el){
		jQuery(el).each(function (i){
			var newWidth = jQuery('#sidebar2').width();
			jQuery(this).css('width' , newWidth + 'px');
			console.log(newWidth);
			console.log(this);
		});
		
		console.log(el);
		console.log('hola');
	}

	jQuery(window).load(function(){
		setImages('#sidebar1 img');
		setImages('#sidebar2 img');
	});
	jQuery(window).resize(function(){
		if (jQuery(".is_internet.v_9").length) {
			setImages('#sidebar1 img');
			setImages('#sidebar2 img');
		}
	});

});