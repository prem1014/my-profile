import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import {ToasterModule} from 'angular2-toaster';
import { CommentComponent } from './component';

@NgModule({
    declarations: [CommentComponent],
    imports: [
        FormsModule,
        CommonModule
        ],
    exports: [CommentComponent]
})

export class CommentModule {}