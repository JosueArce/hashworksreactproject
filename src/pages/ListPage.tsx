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
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
            }}>
                <div style={{
                    width: 48,
                    height: 48,
                    border: '6px solid #e0e4ea',
                    borderTop: '6px solid #2d3a4b',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginBottom: 18,
                }} />
                <span style={{ color: '#2d3a4b', fontSize: '1.2rem', fontWeight: 500 }}>Loading...</span>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <ItemList lists={lists} />
        </div>
    );
};

export default ListPage;