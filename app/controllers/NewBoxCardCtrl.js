"use strict";

app.controller("NewBoxCardCtrl", function($scope, CardFactory, AuthFactory, $location){

	let user = AuthFactory.getUser();

     $scope.title = "New Box Listing";
     $scope.btnText = "Post Listing";
     
     $scope.newCard = {
	 	// img: ?
	 	produce: "",
	 	boxSize: "",
	 	pickUp: "",
	 	date: "",
	 	time: "",
	 	cost: "",
	 	numberAvailable: "",
	 	orderBy: "",
	 	farmName: "",
	 	finePrint: "",
        uid: user
	 };
	 //ability to autodeduct numberavailable w/signups


	 $scope.addNewCard = function(){
        console.log("add new card");
        CardFactory.postCard($scope.newBoxCard)
        .then(function(response){
        	$location.url("/cards/all/box");
        });
        // $scope.newTask.isCompleted = false;
        // $scope.newTask.id = $scope.items.length;
        console.log("you added a new box card:", $scope.newBoxCard);
        // $scope.items.push($scope.newTask);
        $scope.newBoxCard = {};
    };
});

