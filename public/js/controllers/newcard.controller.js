app.controller("NewCardController", function ($scope, FlashCardsFactory) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.newCard = {
		question: null,
		category: null,
		answers: [
			{ text: null, correct: false },
			{ text: null, correct: false },
			{ text: null, correct: false }
		]
	};

	$scope.makeNewCard = function(){
		FlashCardsFactory.makeFlashCard($scope.newCard).then(function(card){
			console.log('Card created:',card);
		}).catch(function(err){
			console.error(err);
		});
	};
});
