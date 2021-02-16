import { Injectable } from '@angular/core';
import { ToDo } from './modal/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItems: ToDo[] = [
    {
      title: 'Workout',
      desc: 'Wakeup and do workout'
    },
    {
      title: 'Assignments',
      desc: 'Complete assignments'
    },
    {
      title: 'Shopping',
      desc: 'Buy fruits'
    }
  ]

  constructor() { }

  getToDos() {
    return this.todoItems;
  }

  addToDo(todo:ToDo) {
    this.todoItems.push(todo);
  }

}
