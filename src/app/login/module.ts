import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ToasterModule } from '../_widgets/toaster/module';
import { SlideAnimationModule } from '../_widgets/animation/module';
import { LoginComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ToasterModule,
        SlideAnimationModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class LoginModule {}