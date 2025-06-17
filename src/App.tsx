import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ListPage} />
        <Route path="/detail/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default App;