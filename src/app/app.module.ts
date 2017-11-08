import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {AdminModule} from './admin/admin.module';
import {LoginComponent} from "./login/login.component";

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    LoginModule,
    AdminModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
