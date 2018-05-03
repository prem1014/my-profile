import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeButtonComponent } from './component';
import { ToasterModule } from '../toaster/module';

@NgModule({
    declarations: [LikeButtonComponent],
    imports: [
        CommonModule,
        ToasterModule
    ],
    exports: [LikeButtonComponent]
})

export class LikeButtonModule {}