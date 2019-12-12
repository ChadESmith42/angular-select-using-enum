import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UseEnumValuePipe } from './use-enum-value.pipe';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UseEnumValuePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
