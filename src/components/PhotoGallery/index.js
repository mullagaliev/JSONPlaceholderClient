import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoGalleryElem from './PhotoGalleryElem';

const style = require('./PhotoGallery.sass');

class PhotoGallery extends Component {
  render() {
    const { items, elemLinkPattern } = this.props;
    if (!Boolean(items.length))
      return null;
    return (
        <div className={style.PhotoGallery}>
          {
            items.map((item) => {
              if (Boolean(elemLinkPattern)) {
                return <PhotoGalleryElem key={item.id}
                                         as='a'
                                         href={elemLinkPattern + item.id}
                                         item={item}/>;
              }
              return <PhotoGalleryElem key={item.id}
                                       item={item}/>;
            })
          }
        </div>
    );
  }
}

PhotoGallery.propTypes = {
  elemLinkPattern: PropTypes.string,
  items: PropTypes.array
};
PhotoGallery.defaultProps = {
  elemLinkPattern: null,
  items: null
};

export default PhotoGallery;
