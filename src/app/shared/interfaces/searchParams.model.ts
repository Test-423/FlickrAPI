export interface SearchParams {
    api_key: string;
    media: string;
    sort: string;
    format: string;
    nojsoncallback: number;
    text: string;
    per_page: number;
    page: number;
    extras: string[];
    tags: string[];
    tag_mode: string;
}