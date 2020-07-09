import React from 'react';
import './App.css';
import 'encova-button-stencil-component';

function App() {
  return (
    <div className="App">
      <encova-button text="Test" message="Alert Text"></encova-button>
      <br></br>
      <hr></hr>
      <encova-form></encova-form>
    </div>
  );
}

export default App;
