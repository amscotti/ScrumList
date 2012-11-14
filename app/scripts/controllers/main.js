'use strict';

ScrumListApp.controller('MainCtrl', function($scope, taskList) {

  $scope.taskList = taskList.getTaskList();

  $scope.formSubmit = function() {
  	$scope.addTask($scope.formData.taskName);
  	$scope.formData = {};
  };

  $scope.updateTaskList = function(){
      taskList.setTaskList($scope.taskList);
  };

  $scope.addTask = function(taskName) {
      $scope.taskList.push({name: taskName, status: "workingOn"});
      $scope.updateTaskList();
  };

  $scope.changeStatus = function(task, status) {
      task.status = status;
      $scope.updateTaskList();
  };

  $scope.removeTask = function(task) {
      var index = _.indexOf($scope.taskList,task);
      $scope.taskList.splice(index, 1);
      $scope.updateTaskList();
  };

  $scope.removeAllTask = function() {
    $scope.taskList = [];
    $scope.updateTaskList();
  };


});
