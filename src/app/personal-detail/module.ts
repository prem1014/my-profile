import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
//import {ToasterModule} from 'angular2-toaster';;
import { SlideAnimationModule } from '../_widgets/animation/module';

import { PersonalDetailComponent } from './component';
const routes: Routes = [
  {
    path: '',
    component: PersonalDetailComponent
  }
];

@NgModule({
  declarations: [
    PersonalDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SlideAnimationModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonalDetailModule { }