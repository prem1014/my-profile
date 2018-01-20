import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';;
import { SignUpComponent } from './sign-up';
const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  }
];

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToasterModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SignUpModule { }