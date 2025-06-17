import React from 'react';
import { Book } from '../types/nyt';

type Props = {
    book?: Book | null;
};

const ItemDetail: React.FC<Props> = ({ book }) => {
    if (!book) {
        return <div>No book found</div>;
    }
    return (
        <div className="book-detail-container">
            <img src={book.book_image} alt={book.title} className="book-detail-image" />
            <div className="book-detail-author">by {book.author}</div>
            <div className="book-detail-description">{book.description}</div>
            <div className="book-detail-publisher">Publisher: {book.publisher}</div>
            <div className="book-detail-isbn">ISBN-13: {book.primary_isbn13}</div>
            <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">View on Amazon</a>
        </div>
    );
};

export default ItemDetail;