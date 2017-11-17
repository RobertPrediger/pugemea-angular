import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent implements OnInit {

    @Input() item;

    constructor() { }

    ngOnInit() {
    }

    done() {
        this.item.done = !this.item.done
    }
}
