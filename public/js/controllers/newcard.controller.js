app.controller("NewCardController", function ($scope, FlashCardsFactory) {
	$scope.card = {
		question: null,
		category: null,
		answers: [
			{ text: null, correct: false },
			{ text: null, correct: false },
			{ text: null, correct: false }
		]
	};
});
