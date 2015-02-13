/*!
 * Copyright 2013 Justinmind. All rights reserved.
 */

(function (window, undefined) {
  jQuery("#simulation")
  .on("mousedown", ".dropdown-options", function(event) {    
    var $dd = jQuery(event.target || event.srcElement).closest(".dropdown, .nativedropdown");
    if(!(jimUtil.isAnnotationInactive() && $dd.length && typeof($dd.attr("readonly")) === "undefined")) {
      return false;
    }
    if(window.jimMobile) {
      if(window.jimMobile.isiOSDevice() || window.jimMobile.isIOS()) {
    	$("#jim-container").trigger("mousedown");
    	if($.browser.msie && $.browser.version<9) {
    		$dd.attr("disabled", "disabled");
    	}
        return false;
      }
    }
  })
  .on("mouseup", ".dropdown-options", function(event) {
	if($.browser.msie && $.browser.version<9) {
      var $dd = jQuery(event.target || event.srcElement).closest(".dropdown, .nativedropdown");
      $dd.removeAttr("disabled");
	}
  })
  .on("change", ".dropdown-options", function(event) {
	var $parent = jQuery(this).parent();
	var value = this.value;
	for (var intLoop = 0; intLoop < this.length; intLoop++) {
        if(this[intLoop].selected) {
            value = this[intLoop].value;
        }
    }
    $parent.find(".value").text(value);
    if(window.jimMobile && window.jimMobile.isMobileDevice() && $parent.hasClass("pressed")) {
      $parent.removeClass("pressed");
    }
  });
})(window);