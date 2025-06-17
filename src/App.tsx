import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import './index.css';

const App: React.FC = () => (
    <Router>
        <div className="app-container">
            {/* <header className="app-header">
                <h1>NYT Best Sellers</h1>
            </header> */}
            <Switch>
                <Route exact path="/" component={ListPage} />
                <Route path="/detail/:id" component={DetailPage} />
            </Switch>
        </div>
    </Router>
);

export default App;