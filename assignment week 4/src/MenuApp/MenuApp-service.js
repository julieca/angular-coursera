(function(){
	'use strict';	
	angular.module("MenuAppModule")
	.service('MenuAppService', MenuAppService)
	.constant("basePath", "http://davids-restaurant.herokuapp.com");
	
	MenuAppService.$inject = ["$http", "basePath"]
	function MenuAppService($http, basePath) {
	  var service = this;
	  
	  service.getAllCategories = function(){
		return $http({
			method : "GET",
			url : (basePath + "/categories.json")
		});	
	  }
	  
	  service.getItemsForCategory = function(shortName){
		return $http({
			method : "GET",
			url : (basePath + "/menu_items.json"),
			params : {
				category : shortName
			}
		});	
	  }
	}
	
})();