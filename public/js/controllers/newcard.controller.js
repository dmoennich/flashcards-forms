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
});