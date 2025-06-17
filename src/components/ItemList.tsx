import React from 'react';
import { Book, BookList } from '../types/nyt';
import { useHistory } from 'react-router-dom';

interface ItemListProps {
    lists: BookList[];
}

const ItemList: React.FC<ItemListProps> = ({ lists }) => {
    const history = useHistory();
    if (!lists || !Array.isArray(lists) || !lists.length) {
        return <div>No books available</div>;
    }
    return (
        <div className="main-container">
            <div className="list-title list-title-fixed">New York Times Best Sellers</div>
            {lists.map(list => (
                <div key={list.list_id} className="list-section">
                    <h2>{list.display_name}</h2>
                    <ul>
                        {list.books.map(book => (
                            <li key={book.primary_isbn13} onClick={() => history.push(`/detail/${encodeURIComponent(book.primary_isbn13)}`)}>
                                <img src={book.book_image} alt={book.title} width={100} />
                                <div>
                                    <p><strong>{book.title}</strong></p>
                                    <p>{book.author}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ItemList;