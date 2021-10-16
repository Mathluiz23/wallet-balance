import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
        onClick={ onClick }
      >
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
