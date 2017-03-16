"use strict";

app.controller("ChooseAdventureCtrl", function($scope, $routeParams, CardFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.cards = [];
	// console.log($routeParams.cardId);


	$scope.showTypes = function(){
		$location.url("/boxoharvest");
	};
//figure out how route knows what the cardId is..actually, I think farmerId not card
//will I have to filter by farmer id /and/ item id?
	$scope.showFarmersCards = function(){
		// console.log("cardId", cardId);
		$location.url("/farmerscards");
	};

	






});