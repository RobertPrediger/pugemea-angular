import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription }                         from 'rxjs/Subscription';

import { Item }                                 from '../_models/item';
import { ItemsService }                         from '../_services/items.service';

@Component({
  selector:         'app-items',
  templateUrl:      './items.component.html',
  styleUrls:        ['./items.component.scss'],
  encapsulation:    ViewEncapsulation.None,
  providers:        [ ItemsService ]
})
export class ItemsComponent implements OnInit, OnDestroy {

    private items:      Item[];

    private itemSub:    Subscription;

    constructor(
        private itemsService: ItemsService
    ) { }

    ngOnInit() {
        this.itemSub    = this.itemsService.getItems()
            .subscribe( items => this.items = items );
    }

    ngDestroy() {
        this.itemSub.unsubscribe();
    }
}
