import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataCurrencie, getExpense } from '../services/moedaApi';
import Button from './Button';
import '../css/FormExpenseStyle.css';

const TAG_TYPE = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const PAY_METHOD = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class FormExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      id: 0,
    };
    this.formsDespesas = this.formsDespesas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchFetchCurrencie } = this.props;
    dispatchFetchCurrencie();
    this.formsDespesas();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick() {
    const { value, currency, method, tag, description, id } = this.state;
    const { dispatchExpense } = this.props;
    dispatchExpense({
      value,
      currency,
      method,
      tag,
      description,
      id,
    });
    this.setState({ id: id + 1, value: '', description: '' });
  }

  formsDespesas() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <div className="label-float">
          <input
            placeholder=" "
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <label htmlFor="value">Valor</label>
        </div>
        <div className="label-float">
          <input
            placeholder=" "
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <label htmlFor="description">Descrição</label>
        </div>

        <div className="select-options">
          <label htmlFor="currency">
            <span>Moeda</span>
          </label>
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencies.map((currency) => (
              <option value={ currency } key={ currency }>{ currency }</option>)) }
          </select>
        </div>

        <div className="select-options">
          <label htmlFor="method">
            <span>Método de pagamento</span>
          </label>
          <select id="method" name="method" onChange={ this.handleChange }>
            { PAY_METHOD.map((pay) => (
              <option value={ pay } key={ pay }>{ pay }</option>)) }
          </select>
        </div>

        <div className="select-options">
          <label htmlFor="tag">
            <span>Tag</span>
          </label>
          <select id="tag" name="tag" onChange={ this.handleChange }>
            { TAG_TYPE.map((tag) => (
              <option value={ tag } key={ tag }>{ tag }</option>)) }
          </select>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <form className="inputs-form">
          {this.formsDespesas()}
          <div>
            <Button
              className="button-add"
              label="Adicionar despesa"
              onClick={ this.handleClick }
            />
          </div>
        </form>
        <hr/>
      </>
    );
  }
}

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchFetchCurrencie: PropTypes.func.isRequired,
  dispatchExpense: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCurrencie: () => dispatch(getDataCurrencie()),
  dispatchExpense: (expense) => dispatch(getExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
