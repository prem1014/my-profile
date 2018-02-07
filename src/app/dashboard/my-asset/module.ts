import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ToasterModule} from 'angular2-toaster';
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
        ToasterModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class MyAssetModule {}