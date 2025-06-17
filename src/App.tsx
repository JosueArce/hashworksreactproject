import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import './index.css';

const App: React.FC = () => (
  <Router>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1>NYT Best Sellers</h1>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/detail/:id" component={DetailPage} />
      </Switch>
    </div>
  </Router>
);

export default App;