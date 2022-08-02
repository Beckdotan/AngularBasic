var module = angular.module("calcApp", []);

//creating controllers
module.controller("calc", calc);


function calc(){

     //on click op button: 
     //need to insert the op betwenen the nubmers. 
     //need to delete the result of last calc.
     //reset op error
     this.opButton = function(op){
          this.selectedOp = op;
          this.res = "";
          this.opError = "";
     }

     //everytime user change the input the res return to be "". 
     this.inputChange = function(){
          console.log("inputchagned");
          this.res = "";
          this.inputError = "";
     }

     //when pressing on = sign: 
     //need to convert numbers to floats. 
     //making the right calc
     //populating the res with the answer. 
     this.calcRes = function(){
          var num1 = parseFloat(this.input1);
          var num2 = parseFloat(this.input2);



          if (isNaN(num1) || isNaN(num2)){
               this.inputError = "Please insert valid numbers like 1 or 2.45445";
          }
          if (this.selectedOp === '+'){
               this.res = num1+num2;
          }
          else if (this.selectedOp === '-'){
               this.res = num1-num2;
          }
          else if (this.selectedOp === '*'){
               this.res = num1*num2;
          }
          else if (this.selectedOp === '/'){
               this.res = num1/num2;
          }else{
               this.opError = "Please choose op above"
          }
     }

}