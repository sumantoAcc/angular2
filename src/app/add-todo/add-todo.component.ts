import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../modal/todo';
import { TodoService } from '../todo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {


  todoForm:FormGroup;
  constructor(private toDoService:TodoService, private dialogRef:MatDialogRef<TodoListComponent>) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      title : new FormControl('', Validators.required),
      desc : new FormControl('')
    });
  }

  get title() {
    return this.todoForm.get('title') as FormControl;
  }

  get desc() {
    return this.todoForm.get('desc') as FormControl;
  }

  addToList() {
    const toDo:ToDo = {
      title : this.title.value,
      desc : this.desc.value
    }
    this.toDoService.addToDo(toDo);
    this.dialogRef.close();
  }

}
