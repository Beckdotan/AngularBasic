var module = angular.module("ngModule", []);
module.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope){

    $scope.dateChanged = function() {
        console.log("date changed");
    }
}

