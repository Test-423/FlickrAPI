import { Component, OnInit } from '@angular/core';
import { ROUTING } from '../../mocks/routing.data';
import { Routing } from '../../interfaces/routing.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';
@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    readonly routingUrls: Routing[] = ROUTING;
    activeItemIndex = 0;
    routingSubs: Subscription;

    constructor(private router: Router) {

        this.routingSubs = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe((val: NavigationEnd) => {
            this.activeItemIndex = this.routingUrls.find((elem) => '/' + elem.url === val.urlAfterRedirects).id - 1;
        })
    }

    ngOnInit() {
    }
    ngOnDestroy(): void {
        this.routingSubs.unsubscribe()
    }
}
