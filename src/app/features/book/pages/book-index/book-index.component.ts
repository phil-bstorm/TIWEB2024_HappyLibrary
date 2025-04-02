import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BookService} from '../../services/book.service';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'book-index',
  imports: [
    RouterLink
  ],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent implements OnInit {
  private readonly _bookService: BookService = inject(BookService);

  isListLoading = false;
  books: BookModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.isListLoading = true;
    // appel du service pour récupérer les livres
    this._bookService.getAllBooks().subscribe({
      next: (res) => {
        setTimeout(() => { // pour simuler un temps de chargement
          this.isListLoading = false;
        }, 2000);

        this.books = res;
        console.log('Books', res);
      },
      error: (error) => {
        this.isListLoading = false;
        console.log('Error', error);
      }
    });
  }
}
