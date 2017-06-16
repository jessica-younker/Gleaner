"use strict";

app.controller("GuildFormCtrl", function($scope, AuthFactory, $location, CardFactory){

    let user = AuthFactory.getUser();

    $scope.title = "Gleaner Guild Sign-Up";
    $scope.btnTxt = "Submit Gleaner";

    $scope.newCard = {
    	image: "",
    	name: "",
    	skill: "",
    	phone: "",
        email: "",
        rating: "",
        comment: "",
        uid: user
    };

    $scope.addNewCard = function(){
        CardFactory.postCard($scope.newCard)
        .then(function(response){
        	$location.url("/gleanerguild");
        });
        $scope.newCard = {};
    };
});
