import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsComponent, authorsRoutes } from './authors/authors.component';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { loggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';

const booksRoutes: Routes = [{ path: ':id', component: BookComponent }];

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [loggedInGuard],
  },
  { path: 'books', component: BooksComponent, children: booksRoutes },
  { path: 'authors', component: AuthorsComponent, children: authorsRoutes },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
