import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'encova-button-stencil-component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <encova-button text="Test" message="Alert Text"></encova-button>
      <br></br>
      <hr></hr>
      <encova-form></encova-form>
    </div>
  );
}

export default App;
