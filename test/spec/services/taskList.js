'use strict';

describe('Service: taskList', function () {

  // load the service's module
  beforeEach(module('ScrumListApp'));

  // instantiate service
  var taskList;
  beforeEach(inject(function(_taskList_) {
    taskList = _taskList_;
  }));

  it('should be loaded', function () {
    expect(!!taskList).toBe(true);
  });

    describe("getTaskList()", function () {
        it("Should return a list of task", function () {
            expect(taskList.getTaskList()).toBeDefined();
        });
    });

    describe("setTaskList()", function () {
        it("should load the task list in to storage", function () {
            taskList.setTaskList([{name:"Learning AngularJS", status:"workingOn"}]);
            expect(amplify.store("taskList")).toBeDefined();
        });
    });

});
