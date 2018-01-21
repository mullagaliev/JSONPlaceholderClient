import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultAlbum from '../../static/defaultAlbum.png';

const style = require('./AlbumList.sass');

class AlbumsList extends Component {
  render() {
    const { items } = this.props;
    if (!Boolean(items.length)) {
      return null;
    }
    return (<div className={style.AlbumsList}>
      <h2 className="BlockTitle" style={{ marginLeft: '10px' }}>User's albums</h2>
      <div className={style.AlbumsListGallery}>
        {
          items.map((item) => {
            return <a key={item.id}
                      className={style.AlbumsListGalleryElem}
                      href={'/album/' + item.id}>
              <img src={defaultAlbum} className={style.AlbumsListGalleryElemPreview}/>
              <span className={style.AlbumsListGalleryElemTitle}>{item.title}</span>
            </a>
          })
        }
      </div>
    </div>);
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
