import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexPageComponent } from './index.component';

@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [IndexPageComponent]
})
export class IndexModule { }
