(function(){
	'use strict';	
	angular.module("DataModule")
	.controller("dataController", dataController);
	
	
	dataController.$inject=["arrItem"];
	function dataController(arrItem){
		var ctr = this;
		
		ctr.category = arrItem.data.menu_items;
		console.log(arrItem.data.menu_items);
		
	}
})();