import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect from="/home" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
