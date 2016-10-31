angular.module('todoList').controller('todoCtlr', function(todoStorage) {
  this.list = todoStorage.getData() || [];
  this.editing = false;
  this.incomplete = "";

  this.updateItem = function() {
    todoStorage.setData(this.list);
    this.editing = false;
  };

  this.addNewItem = function() {
    this.list.push({
      text: this.text,
      completed: false
    });
    this.text = "";
    todoStorage.setData(this.list);
  };

  this.deleteItem = function(id) {
    this.list.splice(id, 1);
    todoStorage.setData(this.list);
  }

});
