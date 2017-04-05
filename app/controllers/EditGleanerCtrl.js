"use strict";

app.controller("EditGleanerCtrl", function($scope, AuthFactory, $location, CardFactory){

let user = AuthFactory.getUser();
     
    $scope.title = "Edit Gleaner";
    $scope.btnTxt = "Update";
    $scope.newCard = {};

    
    CardFactory.getCards()
        .then(function(cardCollection) {
            $scope.cards = cardCollection;
            $scope.newCard = $scope.cards.find(function(card) {
                return card.uid === user && "skill" in card;  
            }); 
        });
    
	$scope.addNewCard = function(){
        CardFactory.updateCard($scope.newCard.id, $scope.newCard)
        .then(function successCallback(response) {
        	$location.url("/gleanerguild");
        });
    };
    
    $scope.deleteCard = function(){
        CardFactory.deleteCard($scope.newCard.id)
        .then(function(response){
            CardFactory.getCards(user).then(function(cardCollection){
                $scope.cards = cardCollection;
                $location.url("#!/gleanerguild");
            });
        });

    };


});
