jQuery(document).ready(function($) {

	var containersClasses = [".wrapper-toolbar", ".menu-background", "#header", ".wrapper-container-featured", ".wrapper-footer"];

	function mainSetHeight () {
		jQuery(".container-border").css('height', 'auto');

		var
			mainHeight = jQuery(".container-border").height(),
			containersTotalHeight = 0,
			bodyHeight = jQuery(window).height();

		for (var i = 0; i < containersClasses.length; i++) {
			if (jQuery(containersClasses[i]).length) {
				containersTotalHeight += jQuery(containersClasses[i]).height();
			}
		}

		if (bodyHeight > (containersTotalHeight + mainHeight)) {
			mainHeight = bodyHeight - containersTotalHeight;
			jQuery(".container-border").height(mainHeight - 27);
		}
	}

	mainSetHeight();

    jQuery(window).resize(function() {
		mainSetHeight();

        if (jQuery(window).width() 	< 769) {
			jQuery(".container-border").css('height', 'auto');
		}
    });
});
