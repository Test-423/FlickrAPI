import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilterService {


    public filter$ = new Subject<string[]>();
    public tags$ = new Subject<string[]>();
    public sorting$ = new Subject<string>();

    constructor() { }




    changeFilter(filter) {
        this.filter$.next(filter);
    }
    changeSorting(sorting) {
        this.sorting$.next(sorting);
    }

    sendTags(tags) {
        this.tags$.next(tags);
    }

}
