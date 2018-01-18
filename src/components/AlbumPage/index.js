import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultPhotos from '../../static/defaultAlbum.png';

class AlbumPage extends Component {
  render() {
    const { items } = this.props;
    return (<Card.Group itemsPerRow={3}>
      {
        items.length ? items.map((item) => {
          return <Card key={item.id}
                       color='orange'>
            <Image src={item.url ? item.url : defaultPhotos}/>
            <Card.Header textAlign='center'>{item.title}</Card.Header>
          </Card>;
        }) : null
      }
    </Card.Group>);
  }
}

AlbumPage.propTypes = {};
AlbumPage.defaultProps = {};

export default AlbumPage;
