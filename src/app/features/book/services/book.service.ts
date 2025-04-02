import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '../models/book.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly _httpClient = inject(HttpClient); // injection de dépendance

  constructor(/*private _httpClient: HttpClient*/) {
  }

  getAllBooks() : Observable<BookModel[]>{
    return this._httpClient.get<BookModel[]>('http://localhost:3000/books');
  }
}
