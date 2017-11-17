import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute }               from '@angular/router';
import * as moment                              from 'moment';

import * as Debug from 'debug';
const log       = Debug('app:home.component');

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    private nav;
    private actKey;
    private today:          any         = moment().format( 'YYYY-MM-DD' );

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.nav    = [
            { key: 'todo', desc: 'ToDo' },
            { key: 'items', desc: 'Items' },
            { key: 'emp', desc: 'Employees' }
        ]
    }

    ngOnInit() {
        log( 'hm', this.route );
        this.actKey = this.route
              .fragment
              .map( fragment => {
                  log('frag', fragment );
                  return fragment || '';
              });
    }

    doNav( key: string ) {
        log( 'doNav', key );
        this.actKey         = key;
        this.router.navigate( [ '/', key ], {} );
    }
}
