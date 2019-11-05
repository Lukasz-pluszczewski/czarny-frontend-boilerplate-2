import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

const Hello = ({ route = 'world', next }) => (
  <div className="container mt-5">
    <div className="card bg-success text-light mb-5">
      <div className="card-body text-center py-5">
        <Link to={next}>
          <h1>{`Hello ${route}`}</h1>
        </Link>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/foo">
          <Hello route="foo" next="/bar" />
        </Route>
        <Route path="/bar">
          <Hello route="bar" next="/" />
        </Route>
        <Route path="/">
          <Hello next="/foo" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
