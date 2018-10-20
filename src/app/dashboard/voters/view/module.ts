import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToasterModule } from '../../../_widgets/toaster/module';
import { ViewVotersComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [
        ViewVotersComponent
    ],
    imports: [
        RouterModule.forChild(route),
        FormsModule,
        CommonModule,
        ToasterModule
    ],
    exports: [RouterModule]
})

export class ViewVoterModule {}
