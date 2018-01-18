import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';;
import { ContactMeComponent } from './contact-me.component';

const routes: Routes = [
  {
    path: '',
    component: ContactMeComponent
  }
];

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ToasterModule,
  ],
  exports: [RouterModule]
})
export class ContactMeModule { }