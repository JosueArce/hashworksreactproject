import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BookList } from '../types/nyt';

type Props = {
    lists?: BookList[];
};

const ItemList: React.FC<Props> = ({ lists }) => {
    const history = useHistory();
    const [openCategories, setOpenCategories] = useState<{ [id: number]: boolean }>({});
    if (!lists || lists.length === 0) {
        return <div>No books available</div>;
    }
    const toggleCategory = (id: number) => {
        setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <div className="all-categories-scroll-container">
            {lists.map((list) => (
                <div key={list.list_id} className="book-list-section">
                    <div
                        className="category-header"
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: 8 }}
                        onClick={() => toggleCategory(list.list_id)}
                        title="Click to expand/collapse and see books"
                    >
                        <span style={{ fontSize: 22, fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: 10 }}>{list.display_name}</span>
                            <span style={{ fontSize: 20, marginLeft: 0 }}>
                                {openCategories[list.list_id] ? '▾' : '▸'}
                            </span>
                        </span>
                        <span style={{ fontSize: 13, color: '#888', marginLeft: 16 }}>
                            (Click to {openCategories[list.list_id] ? 'collapse' : 'expand'})
                        </span>
                    </div>
                    {openCategories[list.list_id] && (
                        <div className="book-list-scroll-container">
                            <div className="book-list-grid">
                                {list.books.map((book) => (
                                    <div
                                        key={book.primary_isbn13}
                                        className="book-card"
                                        onClick={() => history.push(`/detail/${book.primary_isbn13}`)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={book.book_image} alt={book.title} className="book-image" />
                                        <h3>{book.title}</h3>
                                        <div className="book-author">{book.author}</div>
                                        <div className="book-description">{book.description}</div>
                                        <a href={`/detail/${book.primary_isbn13}`} onClick={e => e.preventDefault()}>Details</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemList;