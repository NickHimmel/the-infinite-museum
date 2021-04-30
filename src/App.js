import React from 'react';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Home from './pages/home'; 
import Nav from './components/nav'; 
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Route path={ROUTES.HOME} component={Home}/>
    </Router>
  );
}

export default App;
