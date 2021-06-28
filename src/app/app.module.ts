import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';

import { FavPageComponent } from './pages/fav-page/fav-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainPageContainer } from './pages/main-page/main-page.container';
import { TaigaModule } from './taiga.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

@NgModule({
    declarations: [
        AppComponent,
        FavPageComponent,
        MainPageComponent,
        HeaderComponent,
        UserPageComponent,
        SideNavComponent,
        MainPageContainer
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TaigaModule,
        InfiniteScrollModule,
        NgxMasonryModule
    ],
    exports: [
        MainPageContainer
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

