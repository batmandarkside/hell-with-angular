import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  text = 'test button';

  ngOnInit() {
    console.log('init button component');
  }

}
