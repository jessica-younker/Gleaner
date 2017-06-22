"use strict";

app.controller("EditHarvestCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams, TwilioFactory){

	let user = AuthFactory.getUser();

	$scope.title = "Edit Harvest Listing";
	$scope.btnText = "Update";
	$scope.newCard = {};
  $scope.btnText2 = "Update & Notify";

  
	CardFactory.getSingleCard($routeParams.cardId)
  	.then(function successCallback(response){
    	$scope.newCard = response;
  	});
    
  	$scope.addNewCard = function(){
    	CardFactory.updateCard($routeParams.cardId, $scope.newCard)
    	.then(function successCallback(response) {
      	$location.url("/farmerscards");
    	});
  	};


  $scope.textGuild = function(){  
        CardFactory.postCard($scope.newCard)
        .then(function(response){
            CardFactory.getCards()
            .then(function(cardCollection) {
                let cards = cardCollection;
                let guildCards = cards.filter(function(card) {   
                    return card.phone;  
                });
                let phoneArray = guildCards.map(function(card) {
                    return card.phone;
                });
                let message = "Hello Gleaner! A hot new harvest opportunity has just been posted. Here's the info: " + `http://localhost:8080/#!/cards/all/harvest/${response.data.name}`;
                phoneArray.forEach(function(phone){
                    TwilioFactory.sendSMS(phone, message);
                });
                $location.url("/farmerscards");
            }); 
        });    
    
    }
}); 

