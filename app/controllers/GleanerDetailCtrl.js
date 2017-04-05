"use strict";

app.controller("GleanerDetailCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){

let user = AuthFactory.getUser();

	$scope.card = {};

	let cardId = $routeParams.cardId;
	 	
	CardFactory.getSingleCard($routeParams.cardId)
		.then(function (response){
			$scope.card = response;
	});
	
	$scope.rateGleaner = function(){
		$location.url(`/rategleaner/${cardId}`);
	};
});