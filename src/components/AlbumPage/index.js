import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultPhotos from '../../static/defaultAlbum.png';

class AlbumPage extends Component {
  render() {
    return (
        <Card.Group itemsPerRow={3}>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='orange' as='a' href='#'>
            <Image src={defaultPhotos} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
        </Card.Group>
    );
  }
}

AlbumPage.propTypes = {};
AlbumPage.defaultProps = {};

export default AlbumPage;
