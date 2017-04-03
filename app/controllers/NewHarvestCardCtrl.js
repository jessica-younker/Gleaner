    "use strict";

app.controller("NewHarvestCardCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, TwilioFactory){
	 
    $scope.searchText = FilterFactory;
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
        // $scope.newTask.isCompleted = false;
        // $scope.newTask.id = $scope.items.length;
        console.log("you added a new harvest card:", $scope.newCard);
        // $scope.items.push($scope.newTask);
        $scope.newCard = {};
    };

    $scope.textGuild = function(){  
        CardFactory.postCard($scope.newCard)
        .then(function(response){
            console.log("response", response);
            CardFactory.getCards()
            .then(function(cardCollection) {
                let cards = cardCollection;
                let guildCards = cards.filter(function(card) {   
                
                    return card.phone;  
                });
                console.log("guildCards", guildCards);

                let phoneArray = guildCards.map(function(card) {

                    return card.phone;
                });
                console.log("phoneArray mapped guildCards", phoneArray);
     
                let message = "Hello Gleaner! A hot new harvest opportunity has just been posted. Here's the info: " + `http://localhost:8080/#!/cards/all/harvest/${response.data.name}`;
                console.log ("message", message);
                phoneArray.forEach(function(phone){
                    TwilioFactory.sendSMS(phone, message);
                });
                $location.url("/success");
            }); 
        });    
    
    };       
        
});

//filter phoneArray so that only gleaners with specific ratings are contacted