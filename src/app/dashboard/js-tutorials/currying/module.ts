import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurryingComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [CurryingComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})

export class CurryingModule {}