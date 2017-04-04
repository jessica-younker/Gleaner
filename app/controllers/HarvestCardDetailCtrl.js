"use strict";

app.controller("HarvestCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, TwilioFactory, $routeParams){

	let user = AuthFactory.getUser();
    
	$scope.card = {};

	let cardId = $routeParams.cardId;
	
	CardFactory.getSingleCard($routeParams.cardId)
		.then(function (response){
			console.log("getSingleItemresponse", response);
			$scope.card = response;
			let farmPhone = $scope.card.farmPhone;
	});


	$scope.textGrower = function(farmPhone){
		let message = "Hello Farmer! Please call me to talk about this harvest opportunity.";
        console.log("farmPhone", farmPhone);
   		TwilioFactory.sendSMS(farmPhone, message);
   		$location.url("/farmertexted"); 
   	};
    

     
   

	
});

//ability to delete or edit card if user


