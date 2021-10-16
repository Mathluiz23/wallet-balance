import React, { Component } from 'react';
import Button from '../components/Button';

// disableButton() {
//   if(Button === true)
// }
const MIN_CHARACTER = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // função genérica para input - exercício do formúlario
  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // validação de e-mail construída com ajuda do colega Vitor Silva
    const { email, password } = this.state;
    const emailValidation = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return (
      <div>
        <h1>Login</h1>
        <div>
          <input
            data-testid="email-input"
            type="email"
            label="email"
            placeholder="Informe seu e-mail"
            name="email"
            value={ email }
            onChange={ this.handleInputChange }
            required
          />
          <input
            data-testid="password-input"
            type="password"
            label="password"
            placeholder="Informe sua senha"
            minLength={ MIN_CHARACTER }
            name="password"
            value={ password }
            onChange={ this.handleInputChange }
            required
          />
          <Button
            disabled={ password.length < MIN_CHARACTER || !emailValidation }
          />
        </div>
      </div>
    );
  }
}

export default Login;
