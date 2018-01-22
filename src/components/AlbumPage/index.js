import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoGallery from '../PhotoGallery';

class AlbumPage extends Component {
  render() {
    const { items } = this.props;
    return (<div className="Block">
      <h1 className="BlockTitle" style={{ textAlign: 'center' }}>Album Name</h1>
      <PhotoGallery items={items}/>
    </div>);
  }
}

AlbumPage.propTypes = {};
AlbumPage.defaultProps = {};

export default AlbumPage;
