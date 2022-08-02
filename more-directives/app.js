
var appModule = angular.module("moreDirectives", []);

appModule.controller("moreDricetiveCtrl", moreDricetiveCtrl);


function moreDricetiveCtrl(){
    this.myList = [1,2, "first string", "other string", true];
    this.objList = [{name: "Charlie", age: 13}, {name: "Dotan", age: 27}, {name: "Katherine", age: 30}];

}
      

   

