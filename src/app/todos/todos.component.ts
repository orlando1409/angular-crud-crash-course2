import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  getTodos(){
    var todos = localStorage.getItem('todos');
  }

  addTodo(){
   var newTodo = {
     text:this.text
    };

   this.todos.push(newTodo);
   this._todoService.addTodo(newTodo);
  }

  deleteTodo(searchText){
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == searchText){
        this.todos.splice(i, 1);
      }  
    }

    this._todoService.deleteTodo(searchText);
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
    console.log(this.appState);    
  }

  updateTodo(){
     for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }  
    }

    this._todoService.updateTodo(this.oldText, this.text);
    console.log(this.text);
  }
}
