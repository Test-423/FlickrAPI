import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { Subject, Subscription } from 'rxjs';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {

    private movementsSubs: Subscription;
    private dialogSubs: Subscription;
    private userInactive: Subject<any> = new Subject();
    private userActivity: ReturnType<typeof setTimeout>;
    private dialogOpened: boolean = false;
    private dialogTimeout: number = 60000;


    @HostListener("window:visibilitychange", ["$event"]) onVisibilityChange($event) {
        const isVisible: boolean = $event.target.visibilityState === 'visible';
        if (isVisible && this.dialogOpened === false) {
            this.setCounter();
        } else {
            clearTimeout(this.userActivity);
        }
    }
    @HostListener('window:mousemove') refreshUserState() {
        if (this.dialogOpened === false) {
            clearTimeout(this.userActivity);
            this.setCounter();
        }
    }

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) { }
    ngOnInit(): void {
        if (document.visibilityState !== 'hidden') {
            this.setCounter();
        }
        this.movementsSubs = this.userInactive.subscribe(() => {
            this.showDialog()
        });
    }
    ngOnDestroy(): void {
        this.movementsSubs.unsubscribe();
        this.dialogSubs.unsubscribe();
    }




    setCounter(): void {
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.dialogTimeout);
    }

    showDialog() {
        this.dialogOpened = true;
        this.dialogSubs = this.dialogService
            .open('Ваша сессия была закрыта', { label: 'Время сессии вышло!', size: 'l' })
            .subscribe({
                complete: () => {
                    this.dialogOpened = false;
                    this.refreshUserState();
                    window.location.reload();
                },
            });
    }
}
