import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import defaultAlbum from '../../static/defaultAlbum.png';
import Slider from 'react-slick';
const style = require('./AlbumList.sass');

class AlbumsList extends Component {
  render() {
    const { items } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (<div className={style.AlbumsList}>
      <h2 className="BlockTitle">User's albums</h2>
      <div>
        <Slider {...settings}>
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
        </Slider>

      </div>
    </div>);
  }
}

AlbumsList.propTypes = {};
AlbumsList.defaultProps = {};

export default AlbumsList;
