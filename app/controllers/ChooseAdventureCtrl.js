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
		$location.url(`/guildform/${user}/edit`);
	};

});
