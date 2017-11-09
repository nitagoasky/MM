import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {AdminModule} from './admin/admin.module';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './admin/user/user.component';
import {MirrorComponent} from './admin/mirror/mirror.component';
import { Page404Component } from './common/page-404/page-404.component';
import {HttpData} from './config/HttpData';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
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
    HttpData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
