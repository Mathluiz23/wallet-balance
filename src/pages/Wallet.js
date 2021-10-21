import React, { Component } from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        {/* <h2>TrybeWallet</h2> */}
      </div>
    );
  }
}

export default (Wallet);
