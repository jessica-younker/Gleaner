"use strict";

var app = angular.module("Gleaner", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(function($routeProvider){
    $routeProvider.
    when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    }).
    when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    }).
    when("/register", {
        templateUrl: "partials/register.html",
        controller: "RegisterCtrl"
    }).
    when("/home", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    }).
    when("/chooseyouradventure", {
        templateUrl: "partials/choose-adventure.html",
        controller: "ChooseAdventureCtrl"
    }).
    // might not need this route:
    when("/cards/all", {
        templateUrl: "partials/all-cards.html",
        controller: "AllCardCtrl"
    }).
    when("/cards/all/harvest", {
        templateUrl: "partials/all-harvest-cards.html",
        controller: "HarvestCardsCtrl",
        resolve: {isAuth}
    }).
    when("/cards/all/box", {
        templateUrl: "partials/all-box-cards.html",
        controller: "BoxCardsCtrl",
        resolve: {isAuth}
    }).
    when("/cards/new/harvest", {
        templateUrl: "partials/new-harvest-card.html",
        controller: "NewHarvestCardCtrl",
        resolve: {isAuth}
    }).
    when("/cards/new/box", {
        templateUrl: "partials/new-box-card.html",
        controller: "NewBoxCardCtrl",
        resolve: {isAuth}
    }).
    when("/boxoharvest", {
        templateUrl: "partials/box-o-harvest.html",
        controller: "BoxOHarvestCtrl",
        resolve: {isAuth}
    }).
    when("/farmerscards", {
        templateUrl: "partials/farmer-cards.html",
        controller: "FarmerCardsCtrl",
        resolve: {isAuth}
    }).
    when("/cards/:cardId/edit/harvest", {
        templateUrl: "partials/new-harvest-card.html",
        controller: "EditHarvestCtrl",
        resolve: {isAuth}
    }).
    when("/cards/:cardId/edit/box", {
        templateUrl: "partials/new-box-card.html",
        controller: "EditBoxCtrl",
        resolve: {isAuth}
    }).
    otherwise("/login");
});

//run when the app loads
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
   
    
    firebase.initializeApp(authConfig);
});