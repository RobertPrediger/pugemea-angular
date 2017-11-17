import { Injectable }                       from '@angular/core';
import { Http, Headers, Response }          from '@angular/http';
import {
        Router,
        CanActivate,
        CanDeactivate,
        ActivatedRouteSnapshot,
        RouterStateSnapshot
    }                                       from '@angular/router';
import { Observable }                       from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User }                             from '../_models/user';
import {
        AppService
    }                                       from '../_services/app.service';

import * as Debug from 'debug';
const log       = Debug('app:authenticationService.service');

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthenticationService implements CanActivate, CanDeactivate<CanComponentDeactivate> {
    user:   User;

    constructor(
        private http: Http,
        private router: Router,
        private appService: AppService ) { }

    login( username: string, password: string ) {
        return new Promise( (resolve, reject) => {
            this.user       = {
                _id:        'rp',
                krz:        'rp',
                Name:       'Robert Prediger'
            };
            setTimeout( () => {
                this.appService.setUser( this.user );
                resolve( this.user );
            });
        });

        // return this.http
        //     .post( '/auth/login', { username: username, password: password } )
        //     .map((response: Response) => {
        //         let user = response.json();
        //
        //         log( 'login', user );
        //         this.user   = user;
        //         this.appService.setUser( user );
        //         return user;
        //     });
    }

    logout() {
        // remove user from local storage to log user out
        this.http
            .post( '/auth/logout', {} )
    }

    relogin() {
        log( 'start relogin' );

        this.user       = {
            _id:        'rp',
            krz:        'rp',
            Name:       'Robert Prediger'
        };

        return new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                this.appService.setUser( this.user );
                resolve( this.user );
            });
        });

        // return new Promise( (resolve,reject) => {
        //     this.http
        //         .post( '/auth/relogin', {} )
        //         .subscribe(
        //             data => {
        //                 log( 'relogin', data );
        //                 let user    = data.json() as User;
        //                 this.user   = user;
        //                 this.appService.setUser( user );
        //                 resolve(data);
        //             },
        //             err => {
        //                 log( 'relogin Error', err );
        //                 resolve(null);
        //             }
        //         );
        // });
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        log( 'canActivate', this.user, state.url );

        if (this.user) {
            // logged in so return true
            return true;
        }

        return this
                .relogin()
                .then( status => {
                    if (!status) {
                        // not logged in so redirect to login page with the return url
                        this.router.navigate( ['/login'], { queryParams: { returnUrl: state.url } } );
                    }
                    return status ? true : false;
                })
    }

    getUser() {
        log( 'getUser', this.user );
        return this.user || {};
    }

    canDeactivate(
            component:      CanComponentDeactivate,
            currentRoute:   ActivatedRouteSnapshot,
            currentState:   RouterStateSnapshot,
            nextState?:     RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
