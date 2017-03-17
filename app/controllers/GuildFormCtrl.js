"use strict";
app.controller("GuildFormCtrl", function($scope, $window, AuthFactory, $location, CardFactory){

//sign up button clicks to form
//click on gleaner card gets detailed view w/ ability to add "voucher" and comment if you are a farmer
let user = AuthFactory.getUser();
     $scope.title = "Gleaner Guild Sign-Up";

     $scope.newCard = {
	 	// img: ?
	 	name: "",
	 	skill: "",
	 	phone: "",
        email: "",
        uid: user
	 };


	 $scope.addNewCard = function(){
        console.log("add new card");
        CardFactory.postCard($scope.newCard)
        .then(function(response){
        	$location.url("/gleanerguild");
        });
        console.log("you added a new box card:", $scope.newBoxCard);
        $scope.newCard = {};
    };


});