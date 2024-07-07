import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book : Book = {} as Book;
  
  
}
