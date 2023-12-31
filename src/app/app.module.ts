import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    UserListComponent,
    FooterComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }