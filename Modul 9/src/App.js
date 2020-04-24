import React, { Component } from 'react';
import logo from './kucing.png';
import './App.css';

function App() {
  return(
    <div className="App">
    <header className="App-header">
  
    <img src={logo} width="300"/>
  <p></p>
  <a>Nama : Hafiz Nur Javier</a>
  <a>Kelas : TI-3C</a>
  <a>NIM : 1741720147</a>
  <a>Alamat : Blitar</a>
  <p></p>
  <button  className="btn btn-primary" onclick="myFunction()">OK</button>
    </header>
    </div>
  );
}
export default App;