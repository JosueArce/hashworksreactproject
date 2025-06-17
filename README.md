# NY Times React App

This is a simple React application that utilizes the New York Times Top Stories API to display a list of articles and their details. The application is built using TypeScript and follows best practices for component structure and testing.

## Features

- Fetches top stories from the New York Times API.
- Displays a list of articles on the main page.
- Allows users to click on an article to view its details on a separate page.
- Includes unit tests for components to ensure reliability.

## Technologies Used

- React
- TypeScript
- New York Times Top Stories API
- React Router
- Jest for testing

## Project Structure

```
flickr-react-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── api
│   │   └── nyt.ts      # API interaction functions (for NYT)
│   ├── components
│   │   ├── ItemList.tsx   # Component to display list of articles
│   │   └── ItemDetail.tsx  # Component to display article details
│   ├── pages
│   │   ├── ListPage.tsx   # Page to display the list of articles
│   │   └── DetailPage.tsx  # Page to display details of a selected article
│   ├── tests
│   │   ├── ItemList.test.tsx   # Tests for ItemList component
│   │   └── ItemDetail.test.tsx  # Tests for ItemDetail component
│   ├── App.tsx            # Main application component with routing
│   ├── index.tsx          # Entry point for the React application
│   └── types
│       └── nyt.ts      # TypeScript interfaces for NYT data structures
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flickr-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your New York Times API key:
   ```
   REACT_APP_NYT_API_KEY=your_actual_nyt_api_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Environment Variables

This project requires a New York Times API key. You must create a `.env` file in the project root with the following content:

```
REACT_APP_NYT_API_KEY=your_actual_nyt_api_key_here
```

- **Do NOT commit your `.env` file or API key to version control.**
- You can obtain a New York Times API key by registering an app at https://developer.nytimes.com/

After creating the `.env` file, restart the development server if it is running.

## Usage

- On the main page, view the latest top stories from the New York Times.
- Click on an article to view its details, including the image and description.

## Testing

To run the tests for the components, use the following command:
```
npm test
```

## License

This project is open-source and available under the [MIT License](LICENSE).