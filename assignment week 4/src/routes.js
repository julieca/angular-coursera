(function(){
	'use strict';	
	angular.module("MenuAppModule")
	.config(routeConfig);
	
	routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routeConfig($stateProvider, $urlRouterProvider){
		
		//$urlRouterProvider.otherwise("/");
		
		$stateProvider
		.state("home", {
			url : "/",
			templateUrl : "templates/home.html"
		})
		.state("category", {
			url : "/category",
			templateUrl : "templates/category.html",
			controller : "categoryController as cat",
			resolve :{
				items : ["MenuAppService", function(MenuAppService){
					return MenuAppService.getAllCategories();
				}]
			}
			
		})
		.state("itemData", {
			url : "/item-data/{shortName}",
			templateUrl : "templates/data.html",
			controller : "dataController as data",
			resolve :{
				arrItem : ["$stateParams", "MenuAppService", function($stateParams, MenuAppService){
					return MenuAppService.getItemsForCategory($stateParams.shortName);
				}]
			}
		});
	}
	
})();