import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneIcon extends Component {
  render() {
    const { height, width, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 512 512" {...this.props}>
          <path d="M16,452.7c-2.6,0-5.2-1-7.2-2.9c-2.9-2.7-4-6.8-2.9-10.6l28.5-100.5C11.9,310.4,0,278.3,0,245.7  c0-50.5,27.1-97.6,76.3-132.9c48.1-34.5,112-53.5,179.7-53.5c67.7,0,131.6,19,179.7,53.5C484.9,148,512,195.2,512,245.7  c0,50.5-27.1,97.6-76.3,132.9C387.6,413,323.7,432,256,432c-41.5,0-82.6-7.4-119.3-21.4L19.5,452C18.4,452.5,17.2,452.7,16,452.7z   M256,80.4c-129.5,0-234.9,74.1-234.9,165.2c0,29.3,11.4,58.3,33,83.9c2.3,2.7,3,6.3,2.1,9.7l-24.4,86.1l101.7-36  c2.4-0.9,5-0.8,7.4,0.1c35.1,14,75,21.4,115.2,21.4c129.5,0,234.9-74.1,234.9-165.3C490.9,154.6,385.5,80.4,256,80.4z" fill={color}/>
        </svg>
    );
  }
}

PhoneIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
};
PhoneIcon.defaultProps = {
  width: '32px',
  height: '32px',
  color: '#405063'
};

export default PhoneIcon;
