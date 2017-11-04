import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
