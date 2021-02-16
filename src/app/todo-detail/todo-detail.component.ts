import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../modal/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

 // todo:ToDo;

  @Input() selectedTodo: ToDo;

  constructor() { }

  ngOnInit(): void {
    //this.todo = this.selectedTodo;
  }

}
