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
  title : string;
  desc : string;
  desc2 : string;
  INDEX : number;

  constructor() { }

  getToDos() {
    return this.todoItems;
  }
  deleteToDos(indexToDelete) {
    this.todoItems.splice(indexToDelete, 1);
  }

  addToDo(todo:ToDo) {
    this.todoItems.push(todo);
  }

}
