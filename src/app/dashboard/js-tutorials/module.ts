import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './list'

const route: Routes = [
    {
        path: '',
        component: TutorialsComponent
    }
]
@NgModule({
    declarations: [TutorialsComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class TutorialsModule {};