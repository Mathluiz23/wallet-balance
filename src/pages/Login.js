import React, { Component } from 'react';
import Button from '../components/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>
          <input
            data-testid="email-input"
            type="email"
            label="email"
            placeholder="Informe seu e-mail"
            required
          />
          <input
            data-testid="password-input"
            type="password"
            label="password"
            placeholder="Informe sua senha"
            required
          />
          <Button />
        </div>
      </div>
    );
  }
}

export default Login;
