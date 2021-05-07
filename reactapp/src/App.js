import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layouts from './Layouts/Layouts.js';
import Add from './Layouts/Add.js';

function App() {
  return (
    <div className="App">
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Product List
        </p>
        <Router>
          <Link to="/add" className="btn btn-success">Add</Link>
          <Route path='/react/public/add' component={Add} />
        </Router>
        
      </header>
      <p><Layouts></Layouts></p>
    </div>
  );
}

export default App;
