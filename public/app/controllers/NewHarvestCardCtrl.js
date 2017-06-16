    "use strict";

app.controller("NewHarvestCardCtrl", function($scope, CardFactory, $location, AuthFactory, TwilioFactory){
	
    let user = AuthFactory.getUser();

    $scope.title = "New Harvest Listing";
    $scope.btnText = "Submit";
    $scope.btnText2 = "Submit & Notify";
     
    $scope.newCard = {
    	image: "",
    	produce: "",
    	amount: "",
    	date: "",
    	time: "",
    	farmName: "",
    	zipCode: "",
    	finePrint: "",
        farmPhone: "",
        uid: user
    };

    $scope.addNewCard = function(){
        console.log("add new card");
        CardFactory.postCard($scope.newCard)
        .then(function(response){
        	$location.url("/cards/all/harvest");
        });
        $scope.newCard = {};
    };

    $scope.textGuild = function(){  
        CardFactory.postCard($scope.newCard)
        .then(function(response){
            CardFactory.getCards()
            .then(function(cardCollection) {
                let cards = cardCollection;
                let guildCards = cards.filter(function(card) {   
                    return card.phone;  
                });
                let phoneArray = guildCards.map(function(card) {
                    return card.phone;
                });
                let message = "Hello Gleaner! A hot new harvest opportunity has just been posted. Here's the info: " + `http://localhost:8080/#!/cards/all/harvest/${response.data.name}`;
                phoneArray.forEach(function(phone){
                    TwilioFactory.sendSMS(phone, message);
                });
                $location.url("/success");
            }); 
        });    
    
    };       
        
});