import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

    private todo:   <any>[]     = [
        { done: false, text: 'Prepare Presentation' },
        { done: false, text: 'Prepare Demo' },
        { done: false, text: 'Send Powerpoint' }
    ]

    constructor() { }

    ngOnInit() {
    }

}
