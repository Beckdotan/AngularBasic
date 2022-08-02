var module = angular.module("nestedControllers", []);

//creating controllers
module.controller("Ctrl1", Ctrl1);
module.controller("Ctrl2", Ctrl2);

//creating functions
function Ctrl1($scope){
    $scope.testProp = "test prop from Ctrl1";
}

function Ctrl2($scope){
    //$scope.testProp = "test prop from Ctrl2";
}