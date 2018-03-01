import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppState } from './app.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Кто здесь ?';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
