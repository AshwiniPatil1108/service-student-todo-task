import { inject, Injectable } from '@angular/core';
import { Itodo } from '../model/todos';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todos : Array<Itodo> =[
  {
    todoItem : "Angular",
    todoId : "123"
  },
  {
    todoItem : "Node Js",
    todoId : "124"
  },
 ]

 private _snackBarService = inject(SnackBarService)
  constructor() { }

  fetchAllTodos():Array<Itodo> {
    //api call to fetch all todo
    return this.todos
  }
  addNewTodo(todo: Itodo){
    //api call to add new todo
    this.todos.push(todo)
    this._snackBarService.openSnackBar(`Todo Item ${todo.todoItem} added successfully!!!`)
  }
  removeTodo(id:string){
    let getIndex= this.todos.findIndex(todo=>
      todo.todoId === id
    )
    console.log(getIndex)
    let removedObj= this.todos[getIndex]
    this.todos.splice(getIndex, 1)
    this._snackBarService.openSnackBar(`Todo Item ${removedObj.todoItem} removed successfully!!!`)
  }
}
