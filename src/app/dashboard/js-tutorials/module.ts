import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './list'
import {route} from './route';

@NgModule({
    declarations: [TutorialsComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class TutorialsModule {};