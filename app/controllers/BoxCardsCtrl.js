"use strict";

app.controller("BoxCardsCtrl", function($scope, $routeParams, CardFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();
    
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });

    $scope.cardDetails = function(cardId){
    	$routeParams.cardId = cardId;
		$location.url(`/cards/all/box/${cardId}`);
		
	};
    $scope.shareProduce = function(){
        $location.url("/chooseyouradventure");
    };
	
});
