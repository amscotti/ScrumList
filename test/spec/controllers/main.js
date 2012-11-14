'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('ScrumListApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        scope = {};
        MainCtrl = $controller('MainCtrl', {
            $scope:scope
        });
    }));

    afterEach(function(){
        amplify.store("taskList", null);
    });

    it('should attach a list of task to the scope', function () {
        expect(Object.keys(scope.taskList).length).toBe(5);
    });

    describe("addTask()", function () {
        it("Should add a task to the task list", function () {
            scope.addTask("New task");
            expect(Object.keys(scope.taskList).length).toBe(6);
        });
    });

    describe("changeStatus()", function () {
        it("Should change the status of a item to blocked", function () {
            scope.changeStatus(scope.taskList[0], "blocked");
            expect(scope.taskList[0].status).toBe("blocked");

        });
    });

    describe("removeTask()", function () {
        it("Should remove the task from the list of task", function () {
            var task = scope.taskList[0];
            scope.removeTask(task);
            expect(scope.taskList.length).toBe(4);

        });
    });

    describe("removeAllTask()", function(){
       it("should remove all task in the task list", function(){
          scope.removeAllTask();
          expect(scope.taskList.length).toBe(0);
       });
    });


});
