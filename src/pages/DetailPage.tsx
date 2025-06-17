import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookByIsbn } from '../api/nyt';
import ItemDetail from '../components/ItemDetail';
import { Book } from '../types/nyt';

const DetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBook = async () => {
            try {
                const data = await fetchBookByIsbn(id || '');
                setBook(data);
            } catch (err) {
                setError('Failed to fetch book');
            } finally {
                setLoading(false);
            }
        };
        loadBook();
    }, [id]);

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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: '#2d3a4b',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '0.6rem 1.4rem',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#1a2230')}
            onMouseOut={e => (e.currentTarget.style.background = '#2d3a4b')}
          >
            ← Back
          </button>
        </div>
        <h1 style={{ textAlign: 'center' }}>Book Details</h1>
        {book && (
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{book.title}</h2>
        )}
        <ItemDetail book={book} />
      </div>
    );
};

export default DetailPage;