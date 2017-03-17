"use strict";
app.controller("EditGleanerCtrl", function($scope, $window, AuthFactory, $location, CardFactory, $routeParams){

//sign up button clicks to form
//click on gleaner card gets detailed view w/ ability to add "voucher" and comment if you are a farmer
let user = AuthFactory.getUser();
     
     $scope.title = "Edit Gleaner";
     $scope.btnText = "Update";
     $scope.newCard = {};

     console.log("cardID TESSSST", $routeParams.user);  
    CardFactory.getSingleCard($routeParams.cardId, $routeParams.user)
        .then(function successCallback(response){
        $scope.newCard = response;
        console.log("response in edit gleaner", response);
    });
    
	 $scope.addNewCard = function(){
        CardFactory.updateCard($routeParams.user, $scope.newCard)
        .then(function successCallback(response) {
        	$location.url("/gleanerguild");
        });
    };


});



// $scope.addNewCard = function(){
//         console.log("add new card");
//         CardFactory.postCard($scope.newCard)
//         .then(function(response){
//             $location.url("/gleanerguild");
//         });
//         // console.log("you added a new box card:", $scope.newBoxCard);
//         // $scope.newCard = {};
//     };
