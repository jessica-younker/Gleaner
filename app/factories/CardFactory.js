"use strict";

app.factory("CardFactory", ($q, $http, FBCreds) => {

	let getCards = (user) => {
	
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/cards.json`)
			.then((cardObject) => {
				let cards = [];
				let cardCollection = cardObject.data;
				Object.keys(cardCollection).forEach((key) => {
					cardCollection[key].id = key;
					cards.push(cardCollection[key]);
				});
				resolve(cards);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postCard = (newCard) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/cards.json`, JSON.stringify(newCard))
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let deleteCard = (cardId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/cards/${cardId}.json`)
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			});
		});
	};

	let getSingleCard = (cardId) => {
		return $q(function(resolve, reject){
			$http.get(`${FBCreds.databaseURL}/cards/${cardId}.json`)
			.then(function(cardObject){
				resolve(cardObject.data);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	let updateCard = (cardId, editedCard) => {
		return $q(function(resolve, reject){
			$http.patch(`${FBCreds.databaseURL}/cards/${cardId}.json`,
				angular.toJson(editedCard))
			.then(function(ObjectFromFirebase){
				resolve(ObjectFromFirebase);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	return {getCards, postCard, deleteCard, getSingleCard, updateCard};

});









