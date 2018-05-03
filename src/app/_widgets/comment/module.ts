import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToasterModule } from '../toaster/module';
import { CommentComponent } from './component';

@NgModule({
    declarations: [CommentComponent],
    imports: [
        FormsModule,
        CommonModule,
        ToasterModule
        ],
    exports: [CommentComponent]
})

export class CommentModule {}