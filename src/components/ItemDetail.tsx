import React from 'react';
import { Book } from '../types/nyt';

type Props = { book?: Book | null };

const ItemDetail: React.FC<Props> = ({ book }) => {
  if (!book) return <div>No book found</div>;
  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <img src={book.book_image} alt={book.title} style={{ width: '100%', borderRadius: 8 }} />
      <h2>{book.title}</h2>
      <div style={{ fontSize: 16, color: '#555' }}>by {book.author}</div>
      <div style={{ margin: '12px 0' }}>{book.description}</div>
      <div style={{ fontSize: 14, color: '#888' }}>Publisher: {book.publisher}</div>
      <div style={{ fontSize: 14, color: '#888' }}>ISBN-13: {book.primary_isbn13}</div>
      <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">View on Amazon</a>
    </div>
  );
};

export default ItemDetail;