/**
 * jQuery InnerLabel - jquery.innerlabel.js
 * - Shows placeholder text/style inside input and textareas
 *
 * Created by: Josh Gaber
 * Date Created: Aug/8/2011
 * Date Modified: Aug/2/2012
 * Website: http://joshgaber.ca/code-projects/jquery-innerlabel
 * Version: 1.0
 */

(function($){
 $.fn.innerlabel = function(options) {
    
    /**
     * Returns value of `s` depending on type.
     * If `s` is a string, returns its value.
     * If `s` is a function, invokes it and returns its return value.
     */
    function getText(s) {
		
		if ((typeof s) == 'function')
			return s();
		else
			return s;
    }

    return this.each(function() {
 
		var defaults = {
			text : $(this).attr('title'),
			css : {},
			onFocusIn : function() {},
			onFocusOut : function() {}
		};
		
 		var params = $.extend(defaults, options);
	 	
	 	/**
	 	 * If element receives focus and has placeholder text:
	 	 * - clear text
	 	 * - remove custom styles
	 	 *
	 	 * If element loses focus and has placeholder text:
	 	 * - add placeholder text
	 	 * - add custom styles
	 	 */
	 	$(this).focusin( function() {
	 		var text = getText(params.text);
	 		
			if ($(this).val() == text)
			{
				params.onFocusIn();
				$(this).val('').removeAttr('style');
			}
		}).focusout( function () {
	 		var text = getText(params.text);
	 		
			if ($(this).val() == '')
			{
				params.onFocusOut();
				$(this).val(text).css(params.css);
			}
		}).focusout();
		
    });
 };
})(jQuery);