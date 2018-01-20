import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//importar


import Texto, {Boton,BotonAnimado} from './Componentes/Texto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT EL FUTURO</h1>
        </header>
       <Texto />
       <Boton />
       <BotonAnimado />
      </div>
    );
  }
}

export default App;
