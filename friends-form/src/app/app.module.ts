import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FriendService } from './friend.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BestFriendsComponent } from './best-friends/best-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    BestFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
