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

	$scope.addNewCard = function(){
		$scope.newCard.updatedAvailability = $scope.newCard.numberAvailable;
        CardFactory.postCard($scope.newCard)
        .then(function(response){
        	$location.url("/cards/all/box");
        });
        
        $scope.newCard = {};
    };
});

