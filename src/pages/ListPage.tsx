import React, { useEffect, useState } from 'react';
import { fetchBookLists } from '../api/nyt';
import ItemList from '../components/ItemList';
import { BookList } from '../types/nyt';

const ListPage: React.FC = () => {
  const [lists, setLists] = useState<BookList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookLists()
      .then(setLists)
      .catch(() => setError('Failed to fetch book lists'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <ItemList lists={lists} />;
};

export default ListPage;