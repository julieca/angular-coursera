(function(){
	'use strict';	
	angular.module("MenuAppModule")
	.controller("categoryController", categoryController);
	
	
	categoryController.$inject=["items", "MenuAppService"];
	function categoryController(items, MenuAppService){
		var ctr = this;
		
		ctr.items = items.data;
		
	}
})();