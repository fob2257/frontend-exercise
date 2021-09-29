import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import CustomProvider from './providers/Custom.provider';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <CustomProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect from="/home" to="/" />
        </Switch>
      </CustomProvider>
    </Router>
  );
}

export default App;
