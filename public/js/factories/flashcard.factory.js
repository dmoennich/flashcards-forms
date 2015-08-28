app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }

  function makeFlashCard(newCard){
    return $http.post('/cards/', newCard).then(function(response){
      console.log("RESPONSE DATA: ",response.data);
      return response.data;
    });
  }

  return {
    getFlashCards: getFlashCards,
    categories: categories,
    makeFlashCard: makeFlashCard
  };
});
