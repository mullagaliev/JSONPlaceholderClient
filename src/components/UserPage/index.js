import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import UserProfile from '../UserProfile';
import AlbumsList from '../AlbumsList';

class UserPage extends Component {
  render() {
    const { user, albums } = this.props;
    return (
        <Grid centered>
          <Grid.Column mobile={16} tablet={6} computer={4}>
            <UserProfile user={user}/>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={9}>
            <AlbumsList items={albums}/>
          </Grid.Column>
          <Grid.Column computer={3}>
          </Grid.Column>
        </Grid>
    );
  }
}

UserPage.propTypes = {};
UserPage.defaultProps = {};

export default UserPage;
