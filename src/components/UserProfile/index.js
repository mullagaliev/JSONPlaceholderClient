import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'
import DefaultAvatar from '../../static/defaultAvatar.jpg';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    if (!user.id)
      return null;
    return (<Card style={{width: 'calc(100% - 10px)', margin: '0 auto'}}>
      <Image fluid src={user.avatar ? user.avatar : DefaultAvatar}/>
      <Card.Content>
        <Card.Header>
          {user.name}
        </Card.Header>
        <Card.Meta>
          <span className='username'>
            <b>Username: </b>
            <a href={'/user/' + user.id}>
              {user.username}
            </a>
          </span>
          <br/>
          <span className='email'>
            <b>Email: </b>
            <a href={'mailto:' + user.email}>
              {user.email}
            </a>
          </span>
          <br/>
          <span className='phone'>
            <b>Phone: </b>
            <a href={'tel:' + user.phone}>
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
            <a href={'http://www.' + user.website} target='_blank'>
              {user.website}
            </a>
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
           albums
        </a>
      </Card.Content>
    </Card>);
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
