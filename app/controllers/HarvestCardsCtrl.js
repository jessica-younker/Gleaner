"use strict";

app.controller("HarvestCardsCtrl", function($scope, CardFactory, $location, AuthFactory, $routeParams){
	
	let user = AuthFactory.getUser();
   
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });

    $scope.cardDetails = function(cardId){
    	$routeParams.cardId = cardId;
		$location.url(`/cards/all/harvest/${cardId}`);	
	};	
});