import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'
import DefaultAvatar from '../../static/defaultAvatar.jpg';

class UserProfile extends Component {
  render() {
    const user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    return (<Card>
      <Image src={user.avatar ? user.avatar : DefaultAvatar}/>
      <Card.Content>
        <Card.Header>
          {user.name}
        </Card.Header>
        <Card.Meta>
          <span className='username'>
            <b>Username: </b>
            <a href="#">
              {`@${user.username}`}
            </a>
          </span>
          <br/>
          <span className='email'>
            <b>Email: </b>
            <a href="#">
              {user.email}
            </a>
          </span>
          <br/>
          <span className='phone'>
            <b>Phone: </b>
            <a href="#">
              {user.phone}
            </a>
          </span>
        </Card.Meta>
        <Card.Description>
          <h2>Address</h2>
          <address>
            <b>City: </b>
            {user.address.city}
            <br/>
            <b>Street: </b>
            {user.address.street}
            <br/>
            <b>Suite: </b>
            {user.address.suite}
            <br/>
            <b>Zipcode: </b>
            {user.address.zipcode}
            <br/>
            <b>Geo: </b>
            {user.address.geo.lat}
            <span> : </span>
            {user.address.geo.lng}
          </address>
          <h2>Other</h2>
          <div>
            <b>Website: </b>
            <a href="">{user.website}</a>
            <br/>
            <b>Company: </b>
            {user.company.name}
            <br/>
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='picture'/>
          22 albums
        </a>
      </Card.Content>
    </Card>);
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
