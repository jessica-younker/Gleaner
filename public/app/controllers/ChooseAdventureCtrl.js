"use strict";

app.controller("ChooseAdventureCtrl", function($scope, $location, AuthFactory){

	let user = AuthFactory.getUser();
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
