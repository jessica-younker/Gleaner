"use strict";

app.controller("GleanerGuildDetailCtrl", function($scope, $window, CardFactory, AuthFactory, $location){

let user = AuthFactory.getUser();

	$scope.card = {};

	// let cardId = $routeParams.cardId;
	 	
	// CardFactory.getSingleCard($routeParams.cardId)
	// 	.then(function (response){
	// 		console.log("getSingleItemresponse", response);
	// 		$scope.card = response;
	// });
//timing issue
	// $scope.reserveBox = function(){
	// 	console.log("you clicked reserve");
	// 	CardFactory.getSingleCard($routeParams.cardId)
	// 	.then(function (response){
	// 		$scope.newCard = response;
	// 		let amount = response.numberAvailable;
	// 		$scope.newCard.numberAvailable = amount - 1;
	// 		console.log ("updatedAmount", $scope.newCard.numberAvailable);
	// 		console.log("$scope.newCard", $scope.newCard);
			
	// 		CardFactory.updateCard($routeParams.cardId, $scope.newCard)
	// 		.then(function (response) {
	// 			console.log("now look here", response);
	// 			$location.url(`/success/${cardId}`);
	// 		});
	// 	});

	// };			


});