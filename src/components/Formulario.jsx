import React, { Component } from 'react';

class Formulario extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <textarea type="text" name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            <option value="BRL">BRL</option>
          </select>
        </label>

        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select
            id="método de pagamento"
            name="método de pagamento"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

export default Formulario;
