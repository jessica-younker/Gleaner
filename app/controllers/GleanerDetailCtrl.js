"use strict";

app.controller("GleanerDetailCtrl", function($scope, $window, CardFactory, AuthFactory, $location, $routeParams){

let user = AuthFactory.getUser();

	$scope.card = {};

	let cardId = $routeParams.cardId;
	console.log("CARDID IN GLEANDERASDG", cardId);
	 	
	CardFactory.getSingleCard($routeParams.cardId)
		.then(function (response){
			console.log("getSingleItemresponse", response);
			$scope.card = response;
			console.log("$routeParams.cardId", $scope.card.id);
	});
	
	$scope.rateGleaner = function(){
		$location.url(`/rategleaner/${cardId}`);
	};


});