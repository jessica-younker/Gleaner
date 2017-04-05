"use strict";

app.controller("BoxCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, $routeParams){

	let user = AuthFactory.getUser();
    
    $scope.title = "Box Details";
	$scope.card = {};
	
	let cardId = $routeParams.cardId;
	 	
	CardFactory.getSingleCard($routeParams.cardId)
		.then(function (response){
			$scope.card = response;
	});
//timing issue
	$scope.reserveBox = function(){
		CardFactory.getSingleCard($routeParams.cardId)
		.then(function (response){
			$scope.newCard = response;
			let amount = response.updatedAvailability;
			$scope.newCard.updatedAvailability = amount - 1;
			
			CardFactory.updateCard($routeParams.cardId, $scope.newCard)
			.then(function (response) {
				$location.url(`/success/${cardId}`);
			});
		});

	};			
});

