import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock';
import PhotoGallery from '../PhotoGallery';

class AlbumsList extends Component {
  render() {
    const { items } = this.props;
    if (!Boolean(items.length)) {
      return null;
    }
    return (<ContentBlock title={'User\'s albums'}>
      <PhotoGallery elemLinkPattern={'/album/'} items={items}/>
    </ContentBlock>);
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
