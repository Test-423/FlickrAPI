import { FlickrPhoto } from "./flickrPhoto.model";

export interface FlickrOutput {
    photos: {
        photo: FlickrPhoto[];
    }
}