import { Directive, ElementRef, OnInit } from '@angular/core';
  
  @Directive({
    selector: '[scroll-tracker]'
  })
  export class ScrollTrackerDirective implements OnInit {
    constructor(private ele: ElementRef) {
    }
    ngOnInit(){
      window.scrollBy(0, this.ele.nativeElement.offsetTop);
    }
  }