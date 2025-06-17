import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemDetail from '../components/ItemDetail';
import { Book } from '../types/nyt';

describe('ItemDetail Component', () => {
    const mockBook: Book = {
        title: 'Test Book',
        author: 'John Doe',
        description: 'A test book description.',
        book_image: 'https://example.com/test-book.jpg',
        primary_isbn13: '1234567890123',
        publisher: 'Test Publisher',
        amazon_product_url: 'https://amazon.com/test-book',
    };

    test('renders book details correctly', () => {
        render(<ItemDetail book={mockBook} />);
        // Use getByText with exact match for title
        expect(screen.getByText('Test Book')).toBeInTheDocument();
        expect(screen.getByText(/by John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/Publisher: Test Publisher/i)).toBeInTheDocument();
        expect(screen.getByText('A test book description.')).toBeInTheDocument();
        expect(screen.getByText(/ISBN-13: 1234567890123/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Test Book/i })).toHaveAttribute('src', mockBook.book_image);
        expect(screen.getByRole('link', { name: /View on Amazon/i })).toHaveAttribute('href', mockBook.amazon_product_url);
    });
});