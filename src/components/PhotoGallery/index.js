import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoGalleryElem from './PhotoGalleryElem';
import Lightbox from 'react-image-lightbox';

const style = require('./PhotoGallery.sass');

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { items, elemLinkPattern } = this.props;
    const images = items.map((item) => {
      return item.url;
    });
    const titles = items.map((item) => {
      return item.title;
    });
    console.log(titles);
    if (!Boolean(items.length))
      return null;
    return (
        <div className={style.PhotoGallery}>
          {
            items.map((item, id) => {
              if (Boolean(elemLinkPattern)) {
                return <PhotoGalleryElem key={item.id}
                                         as='a'
                                         href={elemLinkPattern + item.id}
                                         item={item}/>;
              }
              return <PhotoGalleryElem key={item.id}
                                       onClick={() => this.setState({
                                         isOpen: true,
                                         photoIndex: id
                                       })}
                                       item={item}/>;
            })
          }
          {
            isOpen && (
                <Lightbox
                    imageTitle={titles[photoIndex]}
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length,
                        })
                    }
                />
            )
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
