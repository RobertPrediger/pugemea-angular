import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import { of }                       from 'rxjs/observable/of';
import { ToastsManager }            from 'ng2-toastr/ng2-toastr';
import * as _                       from 'underscore';

import 'rxjs/add/operator/toPromise';

import { Item }                     from '../_models/item';

import * as Debug from 'debug';
const log       = Debug('app:items.service');

@Injectable()
export class ItemsService {

    private items:      Item[];

    constructor(
        private http: Http,
        private toastr: ToastsManager
    ) {}

    getItems(): Observable<Item[]> {

        return of( [
            {
                email:      'robert.prediger@web4biz.de',
                name:       'Robert Prediger',
                phone:      '+49 179 111111111'
            },
            {
                email:      'mister.smith@web4biz.de',
                name:       'Mr Smith',
                phone:      '+49 8761 123456'
            },
            {
                email:      'max.mustermann@web4biz.de',
                name:       'Max Mustermann',
                phone:      '+49 89 7654321'
            }
        ] );

        // return this.http
        //         .post( '/data/items' )
        //         .subscribe(
        //             (items: Item[] ) => {
        //                 this.items      = items;
        //                 return this.items;
        //             },
        //             (error: any) => {
        //                 console.error( 'An error occurred', error );
        //                 this.toastr.error( 'An error occurred while loading Items!', error.message || error );
        //             }
        //         );
        // });
    }

}
