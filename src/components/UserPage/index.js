import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import UserProfile from '../UserProfile';
import AlbumsList from '../AlbumsList';

class UserPage extends Component {
  render() {
    return (
        <Grid>
          <Grid.Column width={4}>
            <UserProfile/>
          </Grid.Column>
          <Grid.Column width={9}>
            <AlbumsList/>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid>
    );
  }
}

UserPage.propTypes = {};
UserPage.defaultProps = {};

export default UserPage;
