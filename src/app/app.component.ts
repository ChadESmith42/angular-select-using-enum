import { Component } from '@angular/core';
import { State } from './state.enum';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public object = State;
  stateSelect = new FormControl('');
}
