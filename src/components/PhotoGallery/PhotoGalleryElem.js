import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultPhotos from '../../static/defaultAlbum.png';
import classnames from 'classnames';

const style = require('./PhotoGallery.sass');

class PhotoGalleryElem extends Component {
  render() {
    const { item, as } = this.props;
    // with link
    switch (as) {
      case 'a':
        return (<a className={classnames(style.PhotoGalleryElem, style.PhotoGalleryElemLink)}
                   {...this.props}>
          <img src={item.url ? item.url : defaultPhotos}
               className={style.PhotoGalleryElemPreview}/>
          <span className={style.PhotoGalleryElemTitle}>{item.title}</span>
        </a>);
        break;
      default:
        return (
            <div className={style.PhotoGalleryElem}>
              <img src={item.url ? item.url : defaultPhotos}
                   className={style.PhotoGalleryElemPreview}/>
              <span className={style.PhotoGalleryElemTitle}>{item.title}</span>
            </div>
        );
    }
  }
}

PhotoGalleryElem.propTypes = {};
PhotoGalleryElem.defaultProps = {};

export default PhotoGalleryElem;
