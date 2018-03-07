import { NgModule } from '@angular/core';
import { ScrollTrackerDirective } from './directive';

@NgModule({
    declarations: [ScrollTrackerDirective],
    exports: [ScrollTrackerDirective]
})

export class ScrollTrackerModule {}