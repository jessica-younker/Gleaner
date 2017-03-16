"use strict";

app.controller("HarvestCardsCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory){

	let user = AuthFactory.getUser();
    
    //passing user to ensure authentication?
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });


	// $scope.cardDelete = function(itemId){
	//     console.log("delete this item", itemId);
	//     ItemStorage.deleteItem(itemId)
 //        .then(function(response){
 //            ItemStorage.getItemList(user).then(function(itemCollection){
 //                $scope.items = itemCollection;
 //            });
 //        });
	    
	// };






	
});