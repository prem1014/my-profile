import { NgModule } from '@angular/core';
import { SlideAnimationDirective } from './directive';

@NgModule({
    declarations: [SlideAnimationDirective],
    exports: [SlideAnimationDirective]
})

export class SlideAnimationModule {}