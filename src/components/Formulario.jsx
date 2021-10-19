import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataCurrencie } from '../services/moedaApi';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currencies: 'USD',
    };
  }

  componentDidMount() {
    const { dispatchFetchCurrencie } = this.props;
    dispatchFetchCurrencie();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            {
              currencies.map((currency) => (
                <option key={ currency }>{ currency }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select
            id="payment-method"
            name="payment-method"
          >
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Formulario.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchFetchCurrencie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCurrencie: () => dispatch(getDataCurrencie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
