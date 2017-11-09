import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {MenuComponent} from './menu/menu.component';
import {PanelMenuModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MirrorComponent} from './mirror/mirror.component';

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
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AdminComponent,
    UserComponent,
    MenuComponent,
    MirrorComponent
  ]
})
export class AdminModule { }
