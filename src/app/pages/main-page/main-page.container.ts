import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

import { Images } from 'src/app/shared/interfaces/images.model';
import { Search } from 'src/app/shared/interfaces/main-page.model';
import { IMAGES } from 'src/app/shared/mocks/images.data';
import { SEARCH } from 'src/app/shared/mocks/main-page.data';
import { fromEvent } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { MainPageService } from 'src/app/api/main-page/main-page.api.service';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'main-page',
    template: `
        <app-main-page
        [value]="value"
        (onSearch)="search($event)"
        (onScrollSearch)="onScrollSearch($event)"
        ></app-main-page>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageContainer implements OnInit {
    data$: Observable<Images[]>;
    value: string = "car";
    holeTags: Images[];

    constructor(private searchService: MainPageService, private cd: ChangeDetectorRef) {
        //this.search(this.value);
    }

    public ngOnInit(): void { }

    search(value) {
        this.searchService.searchKeyword(value);
    }
    onScrollSearch(value) {
        this.searchService.searchKeyword(value);
    }
}