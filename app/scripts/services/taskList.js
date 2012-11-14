'use strict';

ScrumListApp.factory('taskList', function () {
    // Service logic

    var taskList = amplify.store("taskList") || [
        {name:"Getting Yeoman Installed", status:"completed"},
        {name:"Learning AngularJS", status:"workingOn"},
        {name:"Write ScrumList App using AngularJS", status:"workingOn"},
        {name:"Use TDD", status:"workingOn"},
        {name:"Push ScrumList to S3", status:"blocked"}
    ];

    // Public API here
    return {
        getTaskList:function () {
            return taskList;
        },
        setTaskList:function(taskList) {
            amplify.store("taskList", taskList)
        }
    };
});
