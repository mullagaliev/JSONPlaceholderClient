import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentBlock extends Component {
  render() {
    const { primary, title, children } = this.props;
    return (<div className="Block">
      {
        primary ?
            <h1 className="BlockTitle" style={{ textAlign: 'center' }}>
              {title}
            </h1>
            :
            <h2 className="BlockTitle" style={{ marginLeft: '10px' }}>
              {title}
            </h2>
      }
      {children}
    </div>);
  }
}

ContentBlock.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
};
ContentBlock.defaultProps = {
  primary: false,
  title: null,
  children: null,
};

export default ContentBlock;
