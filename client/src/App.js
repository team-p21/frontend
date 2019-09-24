import React from 'react';
import './App.css';
import GlobalStyle from './styles/Global'

import Register from './auth/Register'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Register /> 
        </div>
      </header>
    </div>
  );
}

export default App;
