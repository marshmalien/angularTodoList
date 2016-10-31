angular.module('todoList').controller('todoCtlr', function(todoStorage) {
  this.list = todoStorage.getData() || [];
  this.editing = false;

  this.updateItem = function() {
    todoStorage.setData(this.list);
    this.editing = false;
    console.log('edit');
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
