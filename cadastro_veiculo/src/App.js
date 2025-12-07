import React from 'react';
import CadastroVeiculo from './components/CadastroVeiculo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema Norteador - Lavagem de Carros</h1>
      </header>
      <main>
        <CadastroVeiculo />
      </main>
    </div>
  );
}

export default App;