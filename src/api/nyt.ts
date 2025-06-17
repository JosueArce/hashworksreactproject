import axios from 'axios';

const API_KEY = process.env.REACT_APP_NYT_API_KEY || '';
const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

export const fetchBookLists = async () => {
  const res = await axios.get(API_URL, { params: { 'api-key': API_KEY } });
  return res.data.results.lists;
};

export const fetchBookByIsbn = async (isbn: string) => {
  const lists = await fetchBookLists();
  for (const list of lists) {
    const found = list.books.find((b: any) => b.primary_isbn13 === isbn);
    if (found) return found;
  }
  return null;
};
