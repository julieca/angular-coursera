(function(){
	'use strict';	
	angular.module("DataModule")
	.component("listMenu", {
		templateUrl : "templates/list data.html",
		bindings : {
			category : "<"
		}
	});
	
})();