import { Routes } from '@angular/router';
import { HomePageComponent } from '../containers/home';
import { ContactsPageComponent } from '../containers/contacts';
import { NoContentComponent } from '../containers/no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomePageComponent },
  { path: 'home',  component: HomePageComponent },
  { path: 'contacts',  component: ContactsPageComponent },
  { path: '**',    component: NoContentComponent },
];
