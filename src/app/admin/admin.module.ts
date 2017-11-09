import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MirrorComponent} from './mirror/mirror.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {PlunkerMaterialModule} from '../config/Common';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

export const ROUTES: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    {path: 'user', component: UserComponent},
    {path: 'mirror', component: MirrorComponent}
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    PlunkerMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminComponent,
    UserComponent,
    MenuComponent,
    MirrorComponent,
    HeaderComponent
  ]
})
export class AdminModule { }
