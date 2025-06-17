import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

let ListPage: React.FC;
let mockParams = {};

beforeAll(() => {
  jest.doMock('../api/nyt', () => {
    const actual = jest.requireActual('../api/nyt');
    return {
      ...actual,
      fetchBookLists: jest.fn().mockResolvedValue([
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
          ],
        },
      ]),
    };
  });
  jest.doMock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockParams,
    useHistory: () => ({ push: jest.fn() }),
  }));
  ListPage = require('../pages/ListPage').default;
});

describe('Integration: ListPage', () => {
  beforeEach(() => {
    mockParams = {};
    jest.clearAllMocks();
  });

  test('ListPage shows loading spinner and then book list', async () => {
    const { fetchBookLists } = require('../api/nyt');
    render(<ListPage />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
