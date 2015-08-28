'use strict';
/* global app */
app.directive('newCardForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/new-card-form/newCardForm.html'
  };
});
