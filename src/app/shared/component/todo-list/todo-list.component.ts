import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr ! : Array<Itodo>
  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.todosArr = this._todoService.fetchAllTodos()
    console.log(this.todosArr);
  }
  onTodoRemove(todoId:string){
    console.log(todoId);
    this._todoService.removeTodo(todoId)
  }
}
