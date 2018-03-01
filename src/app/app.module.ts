import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from '../containers/home';
import { HeroDetailComponent } from '../containers/home/hero-detail';
import { ContactsPageComponent } from '../containers/contacts';
import { NoContentComponent } from '../containers/no-content';

import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsPageComponent,
    NoContentComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    APP_PROVIDERS,
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
