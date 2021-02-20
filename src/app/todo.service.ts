import { Injectable } from '@angular/core';
import { ToDo } from './modal/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItems: ToDo[] = [
    {
      title: 'Angular-evening',
      desc: 'Santhosh Kalisamy',
      desc2: 'topics covered like routing, angular materials.'
    },
    {
      title: 'Java-Evening',
      desc: 'Sharanaya',
      desc2: 'topics covered like lambda expressions, stream()'
    },
    {
      title: 'React Native',
      desc: 'Tajammul Pasha',
      desc2: 'Built Mobile News-feed'
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
