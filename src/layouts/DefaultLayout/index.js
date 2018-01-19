import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import { Container } from 'semantic-ui-react';

class DefaultLayout extends Component {
  render() {
    const { header, children, footer } = this.props;
    return <div>
      { header ? header : <Menu/> }
      <div style={{ marginTop: '70px', marginBottom: '20px' }}>
        <Container>
          { children }
        </Container>
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
