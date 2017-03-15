"use strict";

app.controller("NewHarvestCardCtrl", function($scope, CardFactory, $location, AuthFactory){
	 
     let user = AuthFactory.getUser();

     // $scope.title = "New Todo";
     // $scope.btnText = "Submit";
     
     $scope.newHarvestCard = {
	 	// img: ?
	 	produce: "",
	 	amount: "",
	 	date: "",
	 	time: "",
	 	farmName: "",
	 	zipCode: "",
	 	finePrint: "",
        uid: user
	 };



	 $scope.addNewCard = function(){
        console.log("add new card");
        CardFactory.postCard($scope.newHarvestCard)
        .then(function(response){
        	$location.url("/cards/all/harvest");
        });
        // $scope.newTask.isCompleted = false;
        // $scope.newTask.id = $scope.items.length;
        console.log("you added a new harvest card:", $scope.newHarvestCard);
        // $scope.items.push($scope.newTask);
        $scope.newHarvestCard = {};
    };
});