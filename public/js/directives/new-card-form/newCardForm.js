app.directive('newCardForm', function(FlashCardsFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/new-card-form/newCardForm.html',
    scope : {
		card: "=card"
    },
    link: function (scope, element, attributes) {
    scope.formShow = false;
	scope.categories = FlashCardsFactory.categories;

	scope.resetForm = function(){
		scope.card = {
			question: null,
			category: null,
			answers: [
				{ text: null, correct: false },
				{ text: null, correct: false },
				{ text: null, correct: false }
			]
		};
	};
	scope.makeNewCard = function(){

		var filledAnswers = scope.card.answers.filter(function (answer) {
			return answer.text !== null;
		});
		var answerCount = filledAnswers.length;

		var correct = filledAnswers.some(function (answer) {
			return answer.correct;
		});

		if (scope.newCardForm.$invalid || !correct || answerCount === 0) {
			console.log("Form not valid!!");
			return;
		}

		console.log("Form seems valid");
		FlashCardsFactory.makeFlashCard(scope.card).then(function(card){
			//scope.resetForm();
			//reset the cards
			// if (FlashCardsFactory.currentCategory === card.category || FlashCardsFactory.currentCategory === undefined) {
			// 	FlashCardsFactory.cards.push(card);
			// }
		}).catch(function(err){
			console.error(err);
		});
	};


    }
  };
});
