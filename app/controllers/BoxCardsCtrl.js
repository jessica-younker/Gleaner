"use strict";

app.controller("BoxCardsCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory){

	let user = AuthFactory.getUser();
    
    //passing user to ensure authentication?
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });
	
});