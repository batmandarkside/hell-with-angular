import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AppState } from '../../app/app.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsPageComponent implements OnInit {
  containerName = 'Contacts container';
  public localState = { value: '' };
  formDisable = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('====== Contacts container init ======');
  }

  public onInput(value) {
    this.localState.value = value;
    if (this.emailFormControl.status === 'VALID') {
      this.formDisable = false;
    }
  }

  public submitState(value: string) {
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
