import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap } from "node_modules/rxjs/operators";
import { Observable, Subject } from "rxjs";
import { FlickrPhoto } from 'src/app/shared/interfaces/flickrPhoto.model';
import { FlickrOutput } from 'src/app/shared/interfaces/flickrOutput.model';
import { SearchParams } from 'src/app/shared/interfaces/searchParams.model';
import { SEARCH_FILTER } from 'src/app/shared/mocks/searchFilter.data';
import { FavImagesService } from 'src/services/fav-images.service';
import { Images } from 'src/app/shared/interfaces/images.model';


@Injectable({
    providedIn: 'root'
})

export class MainPageService {




    httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
        //withCredentials: true
    };

    flickrKey: string = '71798ad62058a52b4b8c00f6e17e31de';
    currentPage: number = 1;
    prevRequest: string;

    images$: Subject<Images[]> = new Subject()

    parametrs: SearchParams = SEARCH_FILTER;

    constructor(
        private readonly http: HttpClient,
        private favService: FavImagesService
    ) { }

    params(params) {
        return Object.entries(params).map((elem) => {
            if (elem[1].constructor === Array) {
                return '&' + elem[0] + '=' + Array.from(elem[1]).join('%2C+');
            } else {
                return '&' + elem[0] + '=' + elem[1];
            }
        }).join('');
    }

    searchKeyword(keyword): void {
        if (keyword.mode === 'new') {
            this.currentPage = 1
        } else {
            this.currentPage++;
        }
        this.prevRequest = keyword.text;

        this.parametrs.text = keyword.searchInput;
        this.parametrs.tags = keyword.tagsInput;
        this.parametrs.sort = keyword.sorting;
        this.parametrs.page = this.currentPage;

        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        this.http.get(
            url + this.params(this.parametrs) //, this.httpOptions
        ).pipe(map((res: FlickrOutput) => {
            const urlArr = [];
            res.photos?.photo.forEach((ph: FlickrPhoto) => {
                const width = (+ph.height_n / +ph.width_n >= 1) ? 1 : +ph.width_n / +ph.height_n;
                const height = (+ph.height_n / +ph.width_n > 1) ? +ph.height_n / +ph.width_n : 1;
                const photoObj = {
                    url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_w.jpg`,
                    pageUrl: `https://www.flickr.com/photos/${ph.owner}/${ph.id}`,
                    title: ph.title,
                    owner: ph.ownername,
                    ownerProfile: `https://www.flickr.com/photos/${ph.owner}/`,
                    ownerPhoto: `https://flickr.com/buddyicons/${ph.owner}.jpg`,
                    tags: ph.tags.split(" "),
                    isFav: this.favService.isFav(`https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_w.jpg`),
                    id: ph.id,
                    scale: +ph.height_n / +ph.width_n,
                    height: height,//+ph.height_n,
                    width: width,
                    skeleton: true,
                    image: true
                };
                urlArr.push(photoObj);
            });
            return urlArr;
        })).subscribe(val => {
            this.images$.next(val)
        });
    }
}