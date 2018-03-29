import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MathematicsComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [MathematicsComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class MathematicsModule {}