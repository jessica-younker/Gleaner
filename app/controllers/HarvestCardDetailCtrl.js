"use strict";

app.controller("HarvestCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, TwilioFactory, $routeParams){

	let user = AuthFactory.getUser();
    

    $scope.textGrower = function(number, message){
    	TwilioFactory.sendSMS();

    };
	
	$scope.title = "Box Details";
	$scope.card = {};

	let cardId = $routeParams.cardId;
	 	console.log("cardId", cardId);
		console.log("routeParams?", $routeParams.cardId);

	$scope.askQuestion = function(){
		console.log("you clicked ask a question");
		$location.url("/email");
		// CardFactory.getSingleCard($routeParams.cardId)
		// .then(function successCallback(response){
		// 	console.log("getSingleItemresponse", response);
		// 	$scope.card = response;

			
		// });
		
	};

  
});

//ability to delete or edit card if user