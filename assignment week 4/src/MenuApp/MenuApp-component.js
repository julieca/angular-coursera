(function(){
	'use strict';	
	angular.module("MenuAppModule")
	.component("listItem", {
		templateUrl : "templates/list item.html",
		bindings : {
			items : "<"
		}
	});
	
})();