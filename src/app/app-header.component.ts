import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute }               from '@angular/router';
import { Subscription }                         from 'rxjs/Subscription';

import { User }                         from './_models/user';
import {
        AppService
    }                                   from './_services/app.service';

import * as Debug from 'debug';
const log       = Debug('app:app-header.component');

@Component({
    selector:       'app-header',
    templateUrl:    'app-header.component.html',
    styleUrls:      ['app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
    @Output() title:      string;
    user:       any         = {};
    loading = false;

    userSub:    Subscription;
    titleSub:   Subscription;

    constructor(
        private appService: AppService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.userSub        = this.appService.user.subscribe( user => {
            log( '->user', user );
            this.user      = user;
        } );
        this.titleSub       = this.appService.title.subscribe( title => {
            log( '->title', title );
            this.title      = title;
        } );
    }

    onLogout() {
        this.router.navigate( [ '/login' ] );
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.titleSub.unsubscribe();
    }
}
