import { Injectable } from '@angular/core';
import { Images } from 'src/app/shared/interfaces/images.model';


@Injectable({
    providedIn: 'root'
})
export class FavImagesService {

    images: Images[] = [];

    constructor() {
        this.testStorage();
    }

    testStorage() {
        if (!localStorage.getItem('fav-images')) {
            localStorage.setItem('fav-images', JSON.stringify(this.images));
        }
    }

    setItem(item) {
        this.images = JSON.parse(localStorage.getItem('fav-images'));
        if (!this.images.find(elem => elem.url === item.url)) {
            let img = Object.assign({}, item)
            item.img = true;
            item.img = true;
            this.images.push(img);
        }
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }
    delItem(item: Images) {
        this.images = JSON.parse(localStorage.getItem('fav-images')).filter((elem: Images) => elem.url !== item.url);
        localStorage.setItem('fav-images', JSON.stringify(this.images));
    }

    isFav(elem) {
        if (Array.from(JSON.parse(localStorage.getItem('fav-images')).map(elem => elem.url)).includes(elem)) {
            return true
        }
        return false;
    }
}
