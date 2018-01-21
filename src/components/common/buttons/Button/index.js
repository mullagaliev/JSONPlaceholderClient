import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const style = require('./PrimaryButton.sass');

class Button extends Component {
  render() {
    const { title, fluid, children } = this.props;
    return (
        <button className={classnames(style.Button, fluid ? style.ButtonFluid : '')}>
          { children ? children : title}
        </button>
    );
  }
}

Button.propTypes = {};
Button.defaultProps = {
  title: 'empty title',
  fluid: false
};

export default Button;
