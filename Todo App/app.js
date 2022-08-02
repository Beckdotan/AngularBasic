
var app = angular.module("todoApp",[]);

app.controller("TodoCtrl",TodoCtrl);


function TodoCtrl(){


    this.todoList=["do 1", "do 2", "do 3"];

    this.editButtonText = "Edit";
  
    this.editMode = false;
    this.addMode = false;


    this.addTodo= function(){
        this.todoList.push(this.newTodo);
        this.newTodo = "";
        this.addMode = !this.addMode;
    }

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
        //changes the button text
        if(this.editMode){
            this.editButtonText = "Save Changes";
        }else{
            this.editButtonText = "Edit";
        }
    }
    this.deleteTodo = function(index){
        this.todoList.splice(index, 1);
    }
    
    this.triggerAddMode = function(){
        this.addMode = !this.addMode;
    }

    this.cancelTodo = function(){
        this.addMode = !this.addMode;
        this.newTodo = "";
    }

}