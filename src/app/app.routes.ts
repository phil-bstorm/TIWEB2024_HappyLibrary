import { Routes } from '@angular/router';
import {BookIndexComponent} from './features/book/pages/book-index/book-index.component';

export const routes: Routes = [
  {
    path: "",
    component: BookIndexComponent
  },
  {
    path: "book/create",
    loadComponent: () =>
     import("./features/book/pages/book-create/book-create.component")
     .then(c => c.BookCreateComponent),
  }
];
