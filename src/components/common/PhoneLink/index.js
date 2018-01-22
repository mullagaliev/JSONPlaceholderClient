/**
 * @author nathanhoad (https://github.com/nathanhoad)
 * Source https://github.com/nathanhoad/react-phone-number/blob/master/src/index.js
 * **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneLink extends Component {
  render() {
    const { number, className, isLinked } = this.props;

    if (!number) return null;

    let _number = number.toString().replace(/[^0-9\+]+/g, '').replace(/\s+/, '');

    let formatted_number;

    if (number.length === 8) {
      formatted_number = _number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
    } else if (number.length === 10) {
      formatted_number = _number.replace(/([0-9]{4})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
    } else if (number.indexOf('+') === 0) {
      formatted_number = _number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{3})/, "$1 $2 $3 $4");
    }
    else {
      formatted_number = number;
    }

    if (isLinked) {
      return (<a href={`tel:${_number}`} className={className}>{formatted_number}</a>);
    } else {
      return (<span className={className}>{formatted_number}</span>);
    }
  }
}

PhoneLink.propTypes = {
  isLinked: PropTypes.bool
};
PhoneLink.defaultProps = {
  isLinked: false
};

export default PhoneLink;
