"use strict";

var app = angular.module("Gleaner", ["ngRoute", "base64"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
        if (userExists){
            resolve();
        }else {
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
    when("/home", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    }).
    when("/chooseyouradventure", {
        templateUrl: "partials/choose-adventure.html",
        controller: "ChooseAdventureCtrl"
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
    when("/gleanerguild", {
        templateUrl: "partials/gleaner-guild.html",
        controller: "GleanerGuildCtrl",
        resolve: {isAuth}
    }).
    when("/guildform", {
        templateUrl: "partials/guild-form.html",
        controller: "GuildFormCtrl",
        resolve: {isAuth}
    }).
    when("/guildform/:user/edit", {
        templateUrl: "partials/guild-form.html",
        controller: "EditGleanerCtrl",
        resolve: {isAuth}
    }).
    when("/rategleaner/:cardId", {
        templateUrl: "partials/rater.html",
        controller: "RaterCtrl",
        resolve: {isAuth}
    }).
    when("/cards/all/box/:cardId", {
        templateUrl: "partials/box-card-detail.html",
        controller: "BoxCardDetailCtrl",
        resolve: {isAuth}
    }).
    when("/cards/all/harvest/:cardId", {
        templateUrl: "partials/harvest-card-detail.html",
        controller: "HarvestCardDetailCtrl",
        resolve: {isAuth}
    }).
    when("/success/:cardId", {
        templateUrl: "partials/success.html",
        controller: "BoxSuccessCtrl",
        resolve: {isAuth}
    }).
    when("/success", {
        templateUrl: "partials/success.html",
        controller: "TextSuccessCtrl",
        resolve: {isAuth}
    }).
    when("/email", {
        templateUrl: "partials/email.html",
        controller: "EmailCtrl",
        resolve: {isAuth}
    }).
    when("/morecomments/:cardId", {
        templateUrl: "partials/more-comments.html",
        controller: "CommentCtrl",
        resolve: {isAuth}
    }).
    when("/gleanerguild/:cardId", {
        templateUrl: "partials/gleaner-detail.html",
        controller: "GleanerDetailCtrl",
        resolve: {isAuth}
    }).
    when("/farmertexted", {
        templateUrl: "partials/farmer-text-success.html",
        controller: "FarmerTextSuccessCtrl",
        resolve: {isAuth}
    }).
    otherwise("/login");
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
    firebase.initializeApp(authConfig);
});