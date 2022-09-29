import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiWallet } from 'react-icons/gi';
import { setLoginValue } from '../actions';
import Button from '../components/Button';
import '../css/LoginStyle.css';

const MIN_CHARACTER = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // função genérica para input - exercício do formúlario
  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // função baseada no exercício do fórmulario
  handleClick() {
    const { history, dispatchEmailValue } = this.props;
    dispatchEmailValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const emailValidation = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

    return (
      <div className="container-page">
        <div className="container-form-login">
          <div className="project-name">
            <h1>Wallet</h1>
            <GiWallet className="icon" size={50} />
          </div>
          <div className="form-login">
            <input
              data-testid="email-input"
              type="email"
              label="email"
              placeholder="Informe seu e-mail"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
            <input
              data-testid="password-input"
              type="password"
              label="password"
              placeholder="Informe sua senha"
              minLength={MIN_CHARACTER}
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            <Button
              className="button-login"
              disabled={!emailValidation || password.length < MIN_CHARACTER}
              onClick={this.handleClick}
              label="Entrar"
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmailValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailValue: (emailValue) => dispatch(setLoginValue(emailValue)),
});

export default connect(null, mapDispatchToProps)(Login);
