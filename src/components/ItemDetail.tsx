import React from 'react';
import { Book } from '../types/nyt';

interface ItemDetailProps {
    book: Book;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ book }) => {
    return (
        <div className="detail-container">
            <img className="detail-image" src={book.book_image} alt={book.title} />
            <div className="detail-title">{book.title}</div>
            <div className="detail-author">by {book.author}</div>
            <div className="detail-publisher">Publisher: {book.publisher}</div>
            <div className="detail-description">{book.description}</div>
            <div className="detail-meta">ISBN-13: {book.primary_isbn13}</div>
            <a className="detail-link" href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">View on Amazon</a>
        </div>
    );
};

export default ItemDetail;