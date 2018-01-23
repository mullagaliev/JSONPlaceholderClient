import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>
  <div className="pulse"/>
  <span>{text}</span></div>;

class GoogleMap extends Component {
  render() {
    const { center, zoom } = this.props;
    const createMapOptions = (maps) => {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      }
    };
    return (
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
            width="100px"
            options={createMapOptions}
        >
          <Marker
              {...this.props.marker}
          />
        </GoogleMapReact>
    );
  }
}

GoogleMap.propTypes = {};
GoogleMap.defaultProps = {
  center: { lat: 59.95, lng: 30.33 },
  zoom: 11,
  marker: { lat: 59.95, lng: 30.33, text: 'empty' },
};

export default GoogleMap;
