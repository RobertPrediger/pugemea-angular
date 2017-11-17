import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as Debug from 'debug';
const log       = Debug('app:item-detail.component');

@Component({
    selector: 'item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit {

    private item;

    constructor() { }

    ngOnInit() {
        this.item       = {};
    }

    select( item ) {
        log( '-> select', item );
        this.item         = item;
    }
}
