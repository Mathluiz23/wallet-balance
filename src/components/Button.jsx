import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
      >
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
};
