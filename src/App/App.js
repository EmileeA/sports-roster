import React from 'react';
import './App.scss';
import NavBar from '../components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';

function App() {
  return(
    <div className="App"><NavBar />
      <div className="authContainer">
      <img className="logo" src = $ {logo}/>

      </div>
    </div>
  )
}

export default App;