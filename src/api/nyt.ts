import axios from 'axios';

// NYT API config
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY || '';
const NYT_BOOKS_API_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

// Fetch all book lists from NYT
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

// Find a book by ISBN (searches all lists)
export const fetchBookByIsbn = async (isbn: string): Promise<any | null> => {
    const lists = await fetchBookLists();
    for (const list of lists) {
        const found = list.books.find((book: any) => book.primary_isbn13 === isbn);
        if (found) return found;
    }
    return null;
};
