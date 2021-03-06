import React from 'react';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Home from './pages/home'; 
import Nav from './components/Nav'; 
import * as ROUTES from './constants/routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Route path={ROUTES.HOME} component={Home}/>
    </Router>
  );
}

export default App;
