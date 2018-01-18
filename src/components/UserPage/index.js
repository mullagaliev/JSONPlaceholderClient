import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import UserProfile from '../UserProfile';
import AlbumsList from '../AlbumsList';

class UserPage extends Component {
  render() {
    const { user, albums } = this.props;
    return (
        <Grid>
          <Grid.Column width={4}>
            <UserProfile user={user}/>
          </Grid.Column>
          <Grid.Column width={9}>
            <AlbumsList items={albums}/>
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
