"use strict";

//login--after successful login, take to page with links to either edit or add new for farmers

app.controller("LoginCtrl", function($scope, $window, AuthFactory, $location, CardFactory){
	
	$scope.account = {
		email: "",
		password: ""
	};

	let logout = () => {
		console.log("logout clicked");
		AuthFactory.logoutUser()
		.then(function(data){
			console.log("logged out?", data);
			$location.url("#!/login");
		}, function(error){
			console.log("error occured on logout");
		});
	};

	//when first loaded, make sure no one is logged in
	if(AuthFactory.isAuthenticated()){
		logout();
	}

	$scope.register = () => {
    	console.log("you clicked register and are autologged in");
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      console.log("LoginCtrl newUser:", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	AuthFactory.loginUser($scope.account)
	    .then( () => {
	        // $scope.isLoggedIn = true;
	        // console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
	        $location.path("/home");
	        $scope.$apply();
	     
	    });
	};

	$scope.loginGoogle = () => {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider()
		.then(function(result) {
	    	var user = result.user.uid;
	    	console.log("logged in user:", user);
	    	$location.path("/home");
	    	$scope.$apply();
	  	}).catch(function(error) {
	    	console.log("error with google login", error);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	  	});
	};
});