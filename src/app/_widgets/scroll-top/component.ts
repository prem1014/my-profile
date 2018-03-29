import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class ScrollTopComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        this.showScroll();
    }
    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.showScroll();
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    showScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('scrollToTop').style.display = 'block';
        } else {
            document.getElementById('scrollToTop').style.display = 'none';
        }
    }
}