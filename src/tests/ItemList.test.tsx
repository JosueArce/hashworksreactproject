import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from '../components/ItemList';
import { BookList } from '../types/nyt';

describe('ItemList Component', () => {
    const mockLists: BookList[] = [
        {
            list_id: 1,
            list_name: 'Fiction',
            display_name: 'Fiction',
            books: [
                {
                    title: 'Book One',
                    author: 'Author A',
                    description: 'Desc 1',
                    book_image: 'https://example.com/book1.jpg',
                    primary_isbn13: '1111111111111',
                    publisher: 'Publisher 1',
                    amazon_product_url: 'https://amazon.com/book1',
                },
                {
                    title: 'Book Two',
                    author: 'Author B',
                    description: 'Desc 2',
                    book_image: 'https://example.com/book2.jpg',
                    primary_isbn13: '2222222222222',
                    publisher: 'Publisher 2',
                    amazon_product_url: 'https://amazon.com/book2',
                },
            ],
        },
    ];

    test('renders ItemList with books', () => {
        render(<ItemList lists={mockLists} />);
        expect(screen.getByText(/Fiction/i)).toBeInTheDocument();
        expect(screen.getByText(/Book One/i)).toBeInTheDocument();
        expect(screen.getByText(/Book Two/i)).toBeInTheDocument();
        expect(screen.getByText(/Author A/i)).toBeInTheDocument();
        expect(screen.getByText(/Author B/i)).toBeInTheDocument();
    });

    test('renders no books message when no lists are provided', () => {
        render(<ItemList lists={[]} />);
        expect(screen.getByText(/No books available/i)).toBeInTheDocument();
    });

    test('renders no books message when lists is undefined', () => {
        render(<ItemList lists={undefined as any} />);
        expect(screen.getByText(/No books available/i)).toBeInTheDocument();
    });

    test('renders no books message when lists is null', () => {
        render(<ItemList lists={null as any} />);
        expect(screen.getByText(/No books available/i)).toBeInTheDocument();
    });
});