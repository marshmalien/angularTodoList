angular.module('todoList').service('todoStorage', function($window) {
  var keyName = 'storedTodos'
  return {
    setData: function(todoItems) {
      $window.localStorage.setItem(keyName, JSON.stringify(todoItems));
      return this;
    },
    getData: function() {
      return JSON.parse($window.localStorage.getItem(keyName));
    }
  }
});
