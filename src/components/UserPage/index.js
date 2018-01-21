import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import UserProfile from '../UserProfile';
import AlbumsList from '../AlbumsList';


class UserPage extends Component {
  render() {
    const { user, albums } = this.props;
    return (
        <div>
          <UserProfile user={user}/>
          <AlbumsList items={albums}/>
        </div>
    );
  }
}

UserPage.propTypes = {};
UserPage.defaultProps = {};

export default UserPage;
