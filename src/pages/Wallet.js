import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import { removeExpense as removeExpenseAction } from '../actions';
import '../css/FormExpenseStyle.css';

const CHARACTHER_TABLE = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class Wallet extends Component {
  constructor() {
    super();

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    const { removeExpense } = this.props;
    removeExpense(id);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <>
        <Header />
        <FormExpense />
        <div className="container-table">
          <table>
            <thead>
              <tr>
                {CHARACTHER_TABLE.map((item) => (
                  <th key={ item }>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expenses &&
                expenses.map(
                  ({
                    id,
                    description,
                    tag,
                    method,
                    value,
                    currency,
                    exchangeRates,
                  }) => (
                    <tr key={ id }>
                      <td>{description}</td>
                      <td>{tag}</td>
                      <td>{method}</td>
                      <td>{value}</td>
                      <td>{exchangeRates[currency].name.split('/')[0]}</td>
                      <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                      <td>
                        {(value * exchangeRates[currency].ask).toFixed(2)}
                      </td>
                      <td>Real</td>
                      <td>
                        <MdDeleteForever
                          onClick={() => this.handleDeleteClick(id)}
                          className="delete-icon"
                        />
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  removeExpense: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
