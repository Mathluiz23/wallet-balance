import React, { Component } from 'react';
import Header from '../components/Header';
import Formulario from '../components/Formulario';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Formulario />
        <h2>TrybeWallet</h2>
      </div>
    );
  }
}

export default Wallet;
