var module = angular.module("nestedControllers", []);

//creating controllers
module.controller("Ctrl1", Ctrl1);
module.controller("Ctrl2", Ctrl2);

//don't use $score as argument
function Ctrl1(){
    //assume that the compiler does the next line: 
    // var this = $scope
    //now we can just use "this" instead of $scope.
   this.testProp = "test prop from Ctrl1";
}

function Ctrl2(){
     this.testProp = "test prop from Ctrl2";
}