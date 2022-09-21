import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GiWallet, GiBrazilFlag } from 'react-icons/gi';
import '../css/HeaderStyle.css';

class Header extends Component {
  render() {
    const { email, expenses, emailLocalStorage } = this.props;
    console.log('EMAIL', emailLocalStorage);
    const totalExpense = expenses.reduce(
      (acc, { value, exchangeRates, currency }) => (
        acc + value * exchangeRates[currency].ask), 0,
    );

    return (
      <>
        <header>
          <div className="project-name">
            <h1>Wallet balance</h1>
            <GiWallet size={ 60 } />
          </div>
        </header>
        <div className="container-info-header">
          <div
            className="email"
            data-testid="email-field"
          >
            {email || emailLocalStorage}
          </div>
          <div className="resume-expense" data-testid="total-field">
            { `Despesa Total: ${totalExpense}` }
            <GiBrazilFlag size={ 30 } className="icon" />
            <div className="coin" data-testid="header-currency-field">
              BRL
            </div>
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  emailLocalStorage: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  emailLocalStorage: state.user,
});

export default connect(mapStateToProps, null)(Header);
