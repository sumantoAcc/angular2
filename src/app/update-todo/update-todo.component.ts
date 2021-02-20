import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../modal/todo';
import { TodoService } from '../todo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoListComponent } from '../todo-list/todo-list.component';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private toDoService: TodoService, private dialogRef: MatDialogRef<TodoListComponent>
    //,@Inject(FormGroup) public data: any
  ) { }

  ngOnInit(): void {
    //console.log(this.data);
    let x = this.toDoService.title;
    let y = this.toDoService.desc;
    let z = this.toDoService.desc2;
    if (x == undefined)
      x = "";
    if (y == undefined)
      y = ""
    if (z == undefined)
      z = "";
    this.todoForm = new FormGroup({
      title: new FormControl(x, Validators.required),
      desc: new FormControl(y),
      desc2: new FormControl(z)
    });
  }

  get title() {
    return this.todoForm.get('title') as FormControl;
  }

  get desc() {
    return this.todoForm.get('desc') as FormControl;
  }
  get desc2() {
    return this.todoForm.get('desc2') as FormControl;
  }

  updateToList() {
    const toDo: ToDo = {
      title: this.title.value,
      desc: this.desc.value,
      desc2: this.desc2.value,
    }
    this.toDoService.todoItems[this.toDoService.INDEX]=toDo;
    //this.toDoService.addToDo(toDo);
    this.dialogRef.close();
  }

}
