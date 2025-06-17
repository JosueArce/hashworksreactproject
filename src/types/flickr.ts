export interface Article {
    uri: string;
    title: string;
    abstract: string;
    url: string;
    byline: string;
    published_date: string;
    multimedia?: { url: string; caption: string }[];
}