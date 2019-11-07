import React from 'react';
import logo from './tecbotletras.png';
import './App.css';
import Teams from './Teams.js';

function App() {
  return (
    <div>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
        </div>

        <form className='App-body'>
          <div>
            <Teams/>
          </div>
        </form>
    </div>
  );
}

export default App;
