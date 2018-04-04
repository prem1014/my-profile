import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideAnimationModule } from '../_widgets/animation/module';
import { Error401Component } from './401';
const routes: Routes = [
  {
    path: '',
    component: Error401Component
  }
];

@NgModule({
  declarations: [
    Error401Component
  ],
  imports: [
    SlideAnimationModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Error401Module { }