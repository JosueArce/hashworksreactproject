import axios from 'axios';

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY || '';
const NYT_BOOKS_API_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

export const fetchBookLists = async (): Promise<any[]> => {
    try {
        const response = await axios.get(NYT_BOOKS_API_URL, {
            params: {
                'api-key': NYT_API_KEY,
            },
        });
        // The books are nested in response.data.results.lists[].books
        return response.data.results.lists;
    } catch (error) {
        console.error('Error fetching book lists from NYT:', error);
        throw error;
    }
};

export const fetchBookByIsbn = async (isbn: string): Promise<any | null> => {
    // Since the API does not provide direct lookup by ISBN, we search all books
    const lists = await fetchBookLists();
    for (const list of lists) {
        const found = list.books.find((book: any) => book.primary_isbn13 === isbn);
        if (found) return found;
    }
    return null;
};
