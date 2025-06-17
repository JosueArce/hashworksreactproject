import React from 'react';
import { BookList } from '../types/nyt';

type Props = { lists?: BookList[] };

const ItemList: React.FC<Props> = ({ lists }) => {
  if (!lists || lists.length === 0) return <div>No books available</div>;
  return (
    <div>
      {lists.map(list => (
        <div key={list.list_id} style={{ marginBottom: 32 }}>
          <h2>{list.display_name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {list.books.map(book => (
              <div key={book.primary_isbn13} style={{ border: '1px solid #eee', borderRadius: 8, padding: 12, width: 200 }}>
                <img src={book.book_image} alt={book.title} style={{ width: '100%', borderRadius: 4 }} />
                <h3>{book.title}</h3>
                <div style={{ fontSize: 14, color: '#555' }}>{book.author}</div>
                <div style={{ fontSize: 13, color: '#888', margin: '8px 0' }}>{book.description}</div>
                <a href={`/detail/${book.primary_isbn13}`}>Details</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;