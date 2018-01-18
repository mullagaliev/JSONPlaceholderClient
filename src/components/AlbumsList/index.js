import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultAlbum from '../../static/defaultAlbum.png';

class AlbumsList extends Component {
  render() {
    const { items } = this.props;
    return (<Card.Group itemsPerRow={4}>
      {
        items.length ? items.map((item) => {
          return <Card key={item.id}
                       color='red'
                       as='a'
                       href={'/album/' + item.id}>
            <Image src={defaultAlbum}/>
            <Card.Header textAlign='center'>{item.title}</Card.Header>
          </Card>
        }) : null
      }
    </Card.Group>);
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
