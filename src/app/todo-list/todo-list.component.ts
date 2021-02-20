import { Component, OnInit } from '@angular/core';
import { ToDo } from '../modal/todo';
import { TodoService } from '../todo.service';

import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  selectedTodoItem: ToDo;

  todoItems: ToDo[] = []

  constructor(private toDoService:TodoService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.todoItems = this.toDoService.getToDos();
  }

  updateSelected(todo:ToDo) {
    console.log(todo);
    this.selectedTodoItem = todo;
  }

  addToDoItem() {
    this.dialog.open(AddTodoComponent, {
      width:'300px'
    });
  }
  deleteToDoItem(index) {
    this.toDoService.deleteToDos(index);
    console.log(index);
  }
  updateToDoItem(index) {
    console.log(index);

    this.toDoService.title = this.todoItems[index].title;
    this.toDoService.desc = this.todoItems[index].desc;
    this.toDoService.desc2 = this.todoItems[index].desc2;
    this.toDoService.INDEX = index;

    this.dialog.open(UpdateTodoComponent, {
      width:'300px',
    });
  }
}
