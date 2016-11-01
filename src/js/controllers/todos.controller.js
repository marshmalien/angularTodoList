angular.module('todoList').controller('todoCtlr', function(todoStorage, $filter, filterFilter) {
  this.list = todoStorage.getData() || [];
  this.editing = false;
  this.filterBy = "all";

  this.updateItem = function() {
    todoStorage.setData(this.list);
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
  };

  this.clearCompleted = function() {
    this.list = this.list.filter(function(todo) {
      return !todo.completed;
    });
  };

  this.filterList = function() {
    if (this.filterBy === 'all') {
      return this.list;
    } else if (this.filterBy === 'active') {
      return this.list.filter(function(todo) {
        return !todo.completed;
      });
    } else if (this.filterBy === 'inactive') {
      return this.list.filter(function(todo) {
        return todo.completed;
      });
    }
  };
});
