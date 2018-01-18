import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultAlbum from '../../static/defaultAlbum.png';

class AlbumsList extends Component {
  render() {
    return (
        <Card.Group itemsPerRow={4}>
          <Card color='red' as='a' href='/album/1'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='red' as='a' href='#'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='red' as='a' href='#'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='red' as='a' href='#'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='red' as='a' href='#'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
          <Card color='red' as='a' href='#'>
            <Image src={defaultAlbum} />
            <Card.Header textAlign='center'>Matthew Harris</Card.Header>
          </Card>
        </Card.Group>
    );
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
