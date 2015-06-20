(function($) {
	
	$.fn.onScreen = function (options) {
		
		var settings = $.extend({
			whereToAdd: $this,
			classToAdd: "onScreen",
			threshold: 30,
			removeClass: false,
			method: 'regular'
		}, options);
		
		this.each(function () {
			var $this = $(this);

			function isElementVisible(elementToBeChecked) {
				var $elem_height = elementToBeChecked.outerHeight();
				var elem_threshold = settings.threshold * $elem_height / 100;
				if (settings.method !== 'regular') {
					elem_threshold = settings.threshold;
				}

				var window_top = $(window).scrollTop();
				var window_bottom = window_top + $(window).height();
				var elem_top = elementToBeChecked.offset().top;
				var elem_bottom = elem_top + $elem_height;
				var top_action = elem_top + elem_threshold;
				var bottom_action = elem_bottom - elem_threshold;

				return (top_action <= window_bottom && bottom_action >= window_top);
			}

			isOnView = isElementVisible($this);
			if (isOnView) {
				settings.whereToAdd.addClass(settings.classToAdd);
			}

			$(window).scroll(function () {
				if (!settings.whereToAdd.hasClass(settings.classToAdd)) {
					isOnView = isElementVisible($this);
					if (isOnView) {
						settings.whereToAdd.addClass(settings.classToAdd);
					}
				} else if (settings.whereToAdd.hasClass(settings.classToAdd) && settings.removeClass) {
					isOnView = isElementVisible($this);
					if (!isOnView) {
						settings.whereToAdd.removeClass(settings.classToAdd);
					}
				}

			});
		})
	}
})