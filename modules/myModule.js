var appMyModule = angular.module("myModule", []);

appMyModule.controller("Hello",Hello);

function Hello(){
    this.text = "Im from myModule file"
}
