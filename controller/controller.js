// var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function($scope) {
	
	// $scope.name = "Task";
	var vm = this;

	vm.counter = 0;
	vm.tasks = {};
	vm.taskName = '';

	vm.addTask = function(){
		var newTask = {
			id: 'task' + vm.counter,
			name: vm.taskName
		};

		vm.tasks[newTask.id] = newTask;
		vm.taskName = '';
		vm.counter++;
	}

	vm.removeTask = function(tsk){
		delete vm.tasks[task.id]
	}
}]);


