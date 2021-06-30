import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/services/filter.service';

import { FILTER } from '../../mocks/filter.data';
import { Filter } from '../../interfaces/filter.model';
import { SORTING } from '../../mocks/sorting.data';
import { Sorting } from '../../interfaces/sorting.model';
import { SIDENAV_OUTPUT } from '../../mocks/sidenav-output.data';
import { SidenavOutput } from '../../interfaces/side-nav.model';

import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusTemplate } from '@tinkoff/ng-polymorpheus';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscribable, Subscription } from 'rxjs';
import { TUI_ARROW } from '@taiga-ui/kit';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {

    showFilter: boolean = true;
    showSorting: boolean = true;
    showAddFilter: boolean = true;
    addSidebar: boolean = false;
    showSidebar: boolean = false;
    readonly arrow = TUI_ARROW;

    filterMass: Filter[] = FILTER;
    sortMass: Sorting[] = SORTING;
    sidenavOutput: SidenavOutput = SIDENAV_OUTPUT;


    tagsMass: string[] = [];

    form = new FormGroup({
        filters: new FormControl([]),
        sorting: new FormControl(this.sortMass[0].data)
    });

    private laptopQuerySubs: Subscription;
    private mobileQuerySubs: Subscription;
    public size: string = 'm';

    arg = new FormGroup({
        tags: new FormControl([]),
        name: new FormControl(),
        active: new FormControl(true)
    });

    constructor(
        private readonly filterService: FilterService,
        private changeDetector: ChangeDetectorRef,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        public breakpointObserver: BreakpointObserver
    ) { }

    ngOnInit() {
        this.form.get('filters').valueChanges.subscribe(() => {
            this.tagsMass = [...new Set([].concat(...this.form.get('filters').value.map(elem => elem.tags)))];
            this.filterService.changeFilter(this.tagsMass);
        })
        this.form.get('sorting').valueChanges.subscribe((sorting) => {
            this.filterService.changeSorting(sorting);
        });
        this.arg.valueChanges.subscribe((data) => {
            if (data.tags.length !== 0 && data.name !== '') {
                this.showAddFilter = false;
            } else {
                this.showAddFilter = true;
            }
        })
        this.laptopQuerySubs = this.breakpointObserver.observe(['(max-width: 1450px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.size = 's';
                this.changeDetector.detectChanges()
            } else {
                this.size = 'm';
                this.changeDetector.detectChanges()
            }
        });

        this.mobileQuerySubs = this.breakpointObserver.observe(['(max-width: 1050px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.addSidebar = true;
                this.changeDetector.detectChanges()
            } else {
                this.addSidebar = false;
                this.changeDetector.detectChanges()
            }
        });

        this.filterService.tags$.subscribe((val) => {
            const filters = this.filterMass.filter((elem) => this.isContain(elem.tags, val))
            this.form.patchValue({ filters: filters }, { emitEvent: false });
        });
    }

    clearFilters() {
        this.form.value.filters = [];
    }

    isEqual(a, b): boolean {
        if (a.length === b.length &&
            a.sort().every((value, index) => {
                return value === b.sort()[index];
            })) {
            return true;
        }
        return false;
    }

    isContain(target: string[], container: string[]) {
        return target.every((elem) => container.includes(elem));
    }

    showDialog(content: PolymorpheusTemplate<TuiDialogContext>) {
        this.dialogService.open(content).subscribe({
            next: () => {
                let filter: Filter = {
                    name: this.arg.get('name').value,
                    tags: this.arg.get('tags').value,
                    icon: 'tuiIconIndentLarge'
                }
                this.filterMass.push(filter);
                this.changeDetector.detectChanges();

            }
        });
    }

    toggle(open: boolean) {
        this.showSidebar = open;
    }
}
