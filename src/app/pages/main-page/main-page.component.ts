import { ChangeDetectionStrategy, Component, EventEmitter, Input, ChangeDetectorRef, OnInit, Output, SimpleChanges, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FavImagesService } from "src/services/fav-images.service";
import { FilterService } from 'src/services/filter.service';

import { Images } from 'src/app/shared/interfaces/images.model';

import { Observable, of, Subject, Subscription } from 'rxjs';

import { TUI_ARROW } from '@taiga-ui/kit';

import { debounceTime, delay, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { TuiNotificationsService } from '@taiga-ui/core';
import { MainPageService } from 'src/app/api/main-page/main-page.api.service';



const tagsData: readonly string[] = [
    'car',
    'note',
    'bus'
];


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})


export class MainPageComponent implements OnInit {

    public testForm = new FormGroup({
        tagsInput: new FormControl([]),
        searchInput: new FormControl(),
        sorting: new FormControl('relevance'),
        mode: new FormControl('new')
    });

    @Input() readonly value: string;
    @Output() onSearch = new EventEmitter<string>();
    @Output() onScrollSearch = new EventEmitter<string>();


    private filterSubs: Subscription;
    private sortingSubs: Subscription;
    private formSubs: Subscription;
    private imagesSubs: Subscription;

    private tags$ = new Subject<string>();

    readonly arrow = TUI_ARROW;

    data: Images[] = [];
    isActive: boolean = false;
    isLoading: boolean = true;


    items$ = this.tags$.pipe(
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),
        ),
        startWith(tagsData),
    );

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        private favService: FavImagesService,
        private searchService: MainPageService,
        private changeDetector: ChangeDetectorRef,
        private filterService: FilterService
    ) { }

    ngOnInit() {
        this.isActive = !this.isActive;

        this.filterSubs = this.filterService.filter$.subscribe((val) => {
            this.testForm.patchValue({ tagsInput: val })
        });
        this.sortingSubs = this.filterService.sorting$.subscribe((val) => {
            this.testForm.patchValue({ sorting: val })
        });

        this.imagesSubs = this.searchService.images$.subscribe((val) => {
            this.data.push(...val);
            this.isLoading = false;
            this.changeDetector.detectChanges();
        })
        this.formSubs = this.testForm.valueChanges.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((val) => {
            this.testForm.patchValue({ mode: 'new' }, { emitEvent: false });
            this.data = [];
            this.isLoading = true;
            this.onSearch.emit(val);
            this.filterService.sendTags(val.tagsInput);
        });

        this.testForm.patchValue({ searchInput: 'car' })
    }

    ngOnDestroy(): void {
        this.filterSubs.unsubscribe();
        this.formSubs.unsubscribe();
        this.sortingSubs.unsubscribe();
        this.imagesSubs.unsubscribe();
    }

    favClick(item: Images) {
        item.isFav = !item.isFav;
        item.isFav ? this.favService.setItem(item) : this.favService.delItem(item);
        this.onFav(item.isFav)
    }

    onFav(result: boolean) {
        if (result === true) {
            this.notificationsService.show('Image added to favorite').subscribe();
        } else {
            this.notificationsService.show('Image has deleted from favorite').subscribe();
        }
    }


    addTag(tag) {
        if (!this.testForm.value.tagsInput.includes(tag)) {
            this.testForm.patchValue({ tagsInput: this.testForm.value.tagsInput.concat(tag) })
        }
    }
    onScroll() {
        this.testForm.patchValue({ mode: 'same' }, { emitEvent: false });
        this.searchService.searchKeyword(this.testForm.value);
        this.isLoading = true;
    }

    serverRequest(search: string): Observable<readonly string[]> {
        const result = tagsData.filter(
            item => item.toLowerCase().indexOf(search.toLowerCase()) !== -1,
        );
        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }

    onSearchChange(search: string) {
        this.tags$.next(search);
        this.filterService.sendTags(this.testForm.value.tagsInput);
    }

}