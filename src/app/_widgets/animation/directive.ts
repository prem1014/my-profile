import { Directive, ElementRef, OnInit } from '@angular/core';
  
  @Directive({
    selector: '[slide-animation]'
  })
  export class SlideAnimationDirective implements OnInit {
    constructor(private ele: ElementRef) {
    }
    ngOnInit(){
      setTimeout( data => {
        let className = this.ele.nativeElement.className;
        className = className + ' ' + 'slide'
        this.ele.nativeElement.className = className;
      },0)
    }
  }