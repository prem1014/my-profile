import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import {ToasterModule} from 'angular2-toaster';
import { SlideAnimationModule } from '../../_widgets/animation/module';
import { MyAssetComponent } from './component';

const route: Routes = [
    {
        path: '',
        component: MyAssetComponent
    }
]
@NgModule({
    declarations: [MyAssetComponent],
    imports: [
        CommonModule,
        FormsModule,
        SlideAnimationModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class MyAssetModule {}