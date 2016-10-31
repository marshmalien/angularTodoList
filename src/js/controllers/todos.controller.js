angular.module('todoList').controller('todoCtlr', function() {

  this.list = [];


  this.updateItem = function() {
    console.log('item has changed');
  };

  this.addNewItem = function() {
    this.list.push({
      text: this.text,
      completed: false
    });
    this.text = "";
  };

});
