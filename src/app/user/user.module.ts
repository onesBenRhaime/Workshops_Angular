import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UsersDbComponent } from '../users-db/users-db.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UsersDbComponent,
  ],
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle, ....
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
