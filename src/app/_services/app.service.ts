import { Injectable, EventEmitter }             from '@angular/core';
import { Subject }                              from 'rxjs/Subject';

import {
        User
    }                                           from '../_models/user';

import * as Debug from 'debug';
const log       = Debug('app:app.service');

@Injectable()
export class AppService {

    // Observable string streams
    title           = new EventEmitter<string>();
    user            = new EventEmitter<User>();
    showWelcome     = new EventEmitter<boolean>();
    message         = new EventEmitter<string>();

    // showWelcome
    setShowWelcome( show: boolean ) {
        this.showWelcome.emit( show );
    }

    setMessage( msg: string ) {
        this.message.emit( msg );
    }

    // User
    setUser( user: User ) {
        this.user.emit( user );
    }

    // Title
    changeTitle( title: string ) {
        this.title.emit( title );
    }
}
