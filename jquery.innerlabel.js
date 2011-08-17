/*
 * jQuery InnerLabel - jquery.innerlabel.js
 * - Shows a default text inside a text field
 *
 * Created by: Josh Gaber
 * Date: Aug/8/2011
 * Version: 0.1
 */

(function($){
 $.fn.innerlabel = function(options) {

    return this.each(function() {
 
		var defaults = {
			text : $(this).attr('title'),
			css : {},
			onFocusIn : function() {},
			onFocusOut : function() {}
		};
		
 		var params = $.extend(defaults, options);
		
		$(this).attr('value', params.text)
		.css(params.css)
		.focusin( function() {
			if ($(this).attr('value') == params.text)
			{
				params.onFocusIn();
				$(this).attr('value', '').removeAttr('style');
			}
		}).focusout( function () {
			if ($(this).attr('value') == '')
			{
				params.onFocusOut();
				$(this).attr('value', params.text)
				.css(params.css);
			}
		});
		
    });
 };
})(jQuery);