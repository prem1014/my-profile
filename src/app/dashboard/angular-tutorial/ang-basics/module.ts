import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngBasicsComponent } from './ang-basics';

const routes: Routes = [
    {
        path: '',
        component: AngBasicsComponent
    }
]
@NgModule({
    declarations: [AngBasicsComponent],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AngBasicsModule {};