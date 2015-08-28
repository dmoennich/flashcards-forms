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

	$scope.resetForm = function(){
		$scope.newCard = {
			question: null,
			category: null,
			answers: [
				{ text: null, correct: false },
				{ text: null, correct: false },
				{ text: null, correct: false }
			]
		};
	};
	$scope.makeNewCard = function(){

		var filledAnswers = $scope.newCard.answers.filter(function (answer) {
			return answer.text !== null;
		});
		var answerCount = filledAnswers.length;

		var correct = filledAnswers.some(function (answer) {
			return answer.correct;
		});

		if ($scope.newCardForm.$invalid || !correct || answerCount === 0) {
			console.log("Form not valid!!");
			return;
		}

		console.log("Form seems valid");
		FlashCardsFactory.makeFlashCard($scope.newCard).then(function(card){
			$scope.resetForm();
			//reset the cards
			if (FlashCardsFactory.currentCategory === card.category || FlashCardsFactory.currentCategory === undefined) {
				FlashCardsFactory.cards.push(card);
			}
		}).catch(function(err){
			console.error(err);
		});
	};

});
