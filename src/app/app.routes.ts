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
  },
  {
    path: "auth/register",
    loadComponent: () =>
      import("./features/auth/pages/register/register.component")
      .then(c => c.RegisterComponent)
  },
  {
    path: "about",
    loadComponent: () =>
      import("./features/info/pages/a-propos/a-propos.component")
        .then(c => c.AProposComponent)
  }
];
