import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {ToasterModule} from '../_widgets/toaster/module';
import { ContactMeComponent } from './contact-me.component';
import { SlideAnimationModule } from '../_widgets/animation/module';

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
    ToasterModule,
    SlideAnimationModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactMeModule { }