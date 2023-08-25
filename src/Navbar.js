import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShoppingList from './Shopping-list';
import Home from './Home';
import './Navbar.css';

function Navbar() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="navbar" id="test-navbar">
            <div className="navbar-menu">
              <div className="navbar-item dropdown">
                <span>Navigation</span>
                <div className="dropdown-content">
                  <Link to="/home" id="test-link-home">Home</Link>
                  <Link to="/shopping-list" id="test-link-shopping-list">Shopping List</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
