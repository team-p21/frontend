import React from 'react';
import './App.css';

import Register from './auth/Register'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home /> 
      </header>
    </div>
  );
}

export default App;
