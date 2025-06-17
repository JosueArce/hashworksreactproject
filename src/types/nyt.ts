export type Book = {
    title: string;
    author: string;
    description: string;
    book_image: string;
    primary_isbn13: string;
    publisher: string;
    amazon_product_url: string;
};

export type BookList = {
    list_id: number;
    list_name: string;
    display_name: string;
    books: Book[];
};
