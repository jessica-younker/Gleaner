"use strict";

app.controller("RaterCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams, RatingFactory){

	let user = AuthFactory.getUser();

	$scope.gleaner = "gleanername";
 
	$scope.newRating = {
		rating: null,
		comment: "",
		gleanerToBeRated: ""
	};

	console.log("routeparams in ratercontrol", $routeParams.cardId);
    CardFactory.getSingleCard($routeParams.cardId)
        .then(function successCallback(response){
            $scope.newCard = response;
            $scope.gleanerToBeRated = $scope.newCard.uid;
        });
    
	$scope.submitRating = function(gleanerToBeRated){
		$scope.newRating.gleanerToBeRated = $scope.gleanerToBeRated;
        console.log("$scope.newRating.comment", $scope.newRating.comment);
        RatingFactory.postRating($scope.newRating)
        .then(function(response){
	        RatingFactory.getAllRatings(gleanerToBeRated)
			.then(function(ratingCollection) {
				let ratings = ratingCollection;

				let gleanersRatings = ratings.filter(function(rating) {
					return rating.gleanerToBeRated === gleanerToBeRated;	
				});	
				let justRatings = gleanersRatings.map(function(rating){
					return rating.rating;
				});
				justRatings = justRatings.filter(function(element) {
					return element!== undefined;
				});
				let totalRating = 0;
				for (var i = 0; i < justRatings.length; i++) {
				    totalRating += justRatings[i];
				}

				let averageRating = totalRating / justRatings.length;
				$scope.newCard.rating = averageRating.toFixed(3);
				$scope.newCard.comment += ` "${$scope.newRating.comment}"`;

				CardFactory.updateCard($routeParams.cardId, $scope.newCard)
			        .then(function successCallback(response) {
			        	console.log("response:", response);
        			}); 
        		$location.url("/gleanerguild");

			});
		});			
	};
        
        $scope.newRating = {};
});
