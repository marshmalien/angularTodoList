angular.module('todoList').controller('todoCtlr', function(todoStorage) {
  this.list = todoStorage.getData() || [];
  this.updateItem = function(todo) {
    return todoStorage.setData(todo);
  };

  this.addNewItem = function() {
    this.list.push({
      text: this.text,
      completed: false
    });
    this.text = "";
    todoStorage.setData(this.list);
  };

});
