import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoGallery from '../PhotoGallery';

class AlbumsList extends Component {
  render() {
    const { items } = this.props;
    if (!Boolean(items.length)) {
      return null;
    }
    return (<div className='Block'>
      <h2 className="BlockTitle" style={{ marginLeft: '10px' }}>User's albums</h2>
      <PhotoGallery elemLinkPattern={'/album/'} items={items}/>
    </div>);
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
