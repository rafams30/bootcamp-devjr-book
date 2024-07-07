import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  newBook : Book = {} as Book;

  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Rafael M",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Rafael Martines",
      price: 36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Rafael Marti",
      price: 43.25
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Rafael Mar",
      price: 28.50
    }
  ];
}
