
var appModule = angular.module("clockApp", []);
appModule.controller("getTime", getTime);

function getTime($scope){
    //getting the time and entering it to curTime.
    var curTime = new Date();
    $scope.curTime = curTime.toTimeString();

    //get name:
    $scope.userName = "";


    //refresh time button. 
    $scope.updateTime = function() {
        //just printing to console for debugging
        console.log("Button clicked");
        //update the curTime value
        var curTime = new Date();
        $scope.curTime = curTime.toTimeString();
    }
      

   
}

