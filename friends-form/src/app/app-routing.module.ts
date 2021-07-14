import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import {BestFriendsComponent} from './best-friends/best-friends.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add', component: FormComponent},
  { path: 'besties', component: BestFriendsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
