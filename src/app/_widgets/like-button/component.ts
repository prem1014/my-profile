import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../_core/api.service';
import { ToasterService } from '../../_core/toaster-service';
@Component({
    selector: 'app-btn-like',
    templateUrl: './component.html'
})

export class LikeButtonComponent implements OnInit {
    public totalLikes: number = 0;
    public loading: string = 'false';
    @Input() feedback: any;
    @Output() commentEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(private API: ApiService, private toaster: ToasterService) {

    }
    ngOnInit() {
        this.getLike(this.feedback.tutorialName);
    }
    saveLike() {
        this.loading = 'true';
        this.API.saveLike(this.feedback)
            .subscribe(
                data => {
                    this.toaster.success(
                        {
                            success: true,
                            message: 'Thank you for your feedback !!'
                        }
                    );
                    this.loading = 'false';
                    this.getLike(this.feedback.tutorialName);
                },
                error => {
                    this.toaster.success(
                        {
                            error: true,
                            message: error.message
                        }
                    );
                }
            )
    }
    getLike(tutorialName) {
        this.loading = 'true';
        this.API.getLikes(tutorialName)
            .subscribe((likes: any) => {
                this.loading = 'false';
                this.totalLikes = this.getTotalLikeCount(likes.data)
            })
    }
    getTotalLikeCount(data) {
        return data.length;
    }
    comment() {
        this.commentEvent.emit(true);
    }
}