import React, { useEffect, useState } from 'react';
import { fetchBookLists } from '../api/nyt';
import ItemList from '../components/ItemList';
import { BookList } from '../types/nyt';

const ListPage: React.FC = () => {
    const [lists, setLists] = useState<BookList[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadLists = async () => {
            try {
                const data = await fetchBookLists();
                setLists(data);
            } catch (err) {
                setError('Failed to fetch book lists');
            } finally {
                setLoading(false);
            }
        };
        loadLists();
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }
    if (error) {
        return <div className="error-message">{error}</div>;
    }
    return <ItemList lists={lists} />;
};

export default ListPage;