export interface Article {
    uri: string;
    title: string;
    abstract: string;
    url: string;
    byline: string;
    published_date: string;
    multimedia?: { url: string; caption: string }[];
}

export interface Book {
    title: string;
    author: string;
    description: string;
    book_image: string;
    primary_isbn13: string;
    publisher: string;
    amazon_product_url: string;
}

export interface BookList {
    list_id: number;
    list_name: string;
    display_name: string;
    books: Book[];
}
