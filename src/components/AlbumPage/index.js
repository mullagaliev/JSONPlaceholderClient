import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';
import PhotoGallery from '../PhotoGallery';

class AlbumPage extends Component {
  render() {
    const { items } = this.props;
    return (<ContentBlock primary={true} title={'Album Name'}>
      <PhotoGallery items={items}/>
    </ContentBlock>);
  }
}

AlbumPage.propTypes = {};
AlbumPage.defaultProps = {};

export default AlbumPage;
