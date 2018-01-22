import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = require('./Table.sass');

class Table extends Component {
  render() {
    const { children } = this.props;
    return (<table className={style.Table} {...this.props}>
      {children}
    </table>);
  }
}

Table.propTypes = {
  children: PropTypes.node
};
Table.defaultProps = {
  children: null
};

export default Table;
