import { Component } from '@angular/core';
import { State } from './state.enum';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'you!';
  object: { [ key: string ]: string } = State;
  stateSelect = new FormControl('', Validators.required);
}
