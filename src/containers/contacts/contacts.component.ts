import { Component, OnInit } from '@angular/core';

import { AppState } from '../../app/app.service';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsPageComponent implements OnInit {
  containerName = 'Contacts container';
  public localState = { value: '' };
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('====== Contacts container init ======');
  }
}
