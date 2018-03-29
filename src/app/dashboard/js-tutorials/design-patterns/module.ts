import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignPatternComponent } from './component';
import { route } from './route';

@NgModule({
    declarations: [DesignPatternComponent],
    imports: [
        RouterModule.forChild(route)
    ],
    exports: []
})

export class DesignPatternModule {}