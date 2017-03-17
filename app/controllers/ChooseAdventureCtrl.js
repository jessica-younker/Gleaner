"use strict";

app.controller("ChooseAdventureCtrl", function($scope, $routeParams, CardFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();
	console.log("user in advenutre", user );
	$scope.cards = [];
	
	$scope.showTypes = function(){
		$location.url("/boxoharvest");
	};

	$scope.showFarmersCards = function(){
		$location.url("/farmerscards");
	};

	$scope.showGleanerCard = function(){
		
		$routeParams.gleanerId = user;
		console.log("routeParams.gleanerId", user);
		CardFactory.getCards()
		.then(function(cardCollection) {
			$scope.cards = cardCollection;
			console.log("$scope.cards", $scope.cards);
			$scope.gleanerCard = $scope.cards.filter(function(card) {
				return card.uid === $routeParams.gleanerId && "skill" in card;	
			});	
			console.log("$scope.gleanerCard", $scope.gleanerCard);
			$location.url(`/guildform/${user}/edit`);
		
		});

		// $routeParams.gleanerId = user;
		// console.log("routeParams.gleanerId", user);
		// CardFactory.getCards()
		// .then(function(cardCollection) {
		// 	$scope.cards = cardCollection;
		// 	console.log("$scope.cards", $scope.cards);
		// 	$scope.gleanerCard = $scope.cards.filter(function(card) {
		// 		return card.uid === $routeParams.gleanerId && "skill" in card;	
		// 	});	
		// 	console.log("$scope.gleanerCard", $scope.gleanerCard);
		// 	$location.url(`/guildform/${user}`);
		
		// });


	};

});
