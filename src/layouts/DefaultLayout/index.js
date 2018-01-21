import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import { Container } from 'semantic-ui-react';

const style = require('./DefaultLayout.sass');

class DefaultLayout extends Component {
  render() {
    const { header, children, footer } = this.props;
    return <div>
      {/*{ header ? header : <Menu/> }*/}
      <div className={style.Content}>
        <div className={style.Container}>
          { children }
        </div>
      </div>
      { footer ? footer : null }
    </div>;
  }
}

DefaultLayout.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
};
DefaultLayout.defaultProps = {
  header: null,
  footer: null,
};

export default DefaultLayout;
