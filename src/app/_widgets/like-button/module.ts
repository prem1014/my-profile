import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeButtonComponent } from './component';

@NgModule({
    declarations: [LikeButtonComponent],
    imports: [CommonModule],
    exports: [LikeButtonComponent]
})

export class LikeButtonModule {}