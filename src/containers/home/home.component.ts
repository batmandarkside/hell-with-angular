import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app/app.service';
import { Title } from './title';

@Component({
  selector: 'app-home-container',
  providers: [
    Title
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
  containerName = 'Home container';
  public localState = { value: '' };
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('====== Home container init ======');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
