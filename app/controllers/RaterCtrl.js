"use strict";

app.controller("RaterCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();


	$scope.gleaner = "gleanername";
     
     $scope.newRating = {
	 	rating: null,
	 	comment: "",
        uid: user
	 };
	 let cardId = $routeParams.cardId;
	 console.log("cardId", cardId);
	 console.log("cardId.uid", cardId.uid);
	 $scope.submitRating = function(cardId){
        CardFactory.postCard($scope.newRating)
        .then(function(response){
        	$location.url("/gleanerguild");
        });
        $scope.newRating = {};
    };

	//push radio button/rating to db
	//push commentfield to db

	//get info back..
	// ...somehow ratings are averaged on each pull back
	// ratings and comments are loaded with gleanerguild card












});