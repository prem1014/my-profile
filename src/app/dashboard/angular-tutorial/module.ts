import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AngularTutorialComponent} from './list';

const routes: Routes = [
    {
        path: '',
        component: AngularTutorialComponent
    }
]
@NgModule({
    declarations: [
        AngularTutorialComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AngularTutorialModule {};