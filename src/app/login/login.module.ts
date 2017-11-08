import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule, InputTextModule, ButtonModule} from 'primeng/primeng';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
