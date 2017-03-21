"use strict";
app.controller("GuildFormCtrl", function($scope, $window, AuthFactory, $location, $routeParams, CardFactory){

//sign up button clicks to form
//click on gleaner card gets detailed view w/ ability to add "voucher" and comment if you are a farmer
    let user = AuthFactory.getUser();
         $scope.title = "Gleaner Guild Sign-Up";
         $scope.btnTxt = "Submit Gleaner";

         $scope.newCard = {
    	 	// img: ?
    	 	name: "",
    	 	skill: "",
    	 	phone: "",
            email: "",
            rating: "",
            comment: "",
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

//how to limit one gleaner card per user
//use route params to carry cardid to raterctrl?