import React from 'react';
import Header from '../components/Header';
import Formulario from '../components/Formulario';

class Wallet extends React.Component {
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
