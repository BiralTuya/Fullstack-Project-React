import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sigh Up or Log In if you already have an account.
          </p>
          <div className="row">
            <div className="col-sm d-flex justify-content-end">
              <button type="button" className="btn btn-info">Sign Up</button>
            </div>
            <div className="col-sm d-flex justify-content-start">
              <button type="button" className="btn btn-info">Log In</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
