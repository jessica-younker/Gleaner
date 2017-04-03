"use strict";

app.controller("NewBoxCardCtrl", function($scope, CardFactory, AuthFactory, $location){

	let user = AuthFactory.getUser();

    $scope.title = "New Box Listing";
    $scope.btnText = "Post Listing";
     
    $scope.newCard = {
	 	image: "",
	 	produce: "",
	 	boxSize: "",
	 	pickUp: "",
	 	date: "",
	 	time: "",
	 	cost: "",
	 	numberAvailable: null,
	 	orderBy: "",
	 	farmName: "",
	 	finePrint: "",
	 	updatedAvailability: null,
        uid: user
	 };
	 //ability to autodeduct numberavailable w/signups

	$scope.addNewCard = function(){
		$scope.newCard.updatedAvailability = $scope.newCard.numberAvailable;
        console.log("add new card");
        CardFactory.postCard($scope.newCard)
        .then(function(response){
        	$location.url("/cards/all/box");
        });
        console.log("you added a new box card:", $scope.newCard);
        
        $scope.newCard = {};
    };
});

