import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddVotersComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [
        AddVotersComponent
    ],
    imports: [
        RouterModule.forChild(route),
        FormsModule,
        CommonModule
    ],
    exports: [RouterModule]
})

export class AddVoterModule {}
