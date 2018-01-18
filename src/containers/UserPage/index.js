import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../../components/UserPage';
import { connect } from 'react-redux';
import { getUserById, getAlbumsByUserId } from '../../actions';

class ContainerUserPage extends Component {
  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserById(userId));
    this.props.dispatch(getAlbumsByUserId(userId));
  }

  render() {
    const { user, albums } = this.props;
    return (<UserPage user={user} albums={albums}/>);
  }
}

ContainerUserPage.propTypes = {};
ContainerUserPage.defaultProps = {};

function mapStateToProps(state) {
  return {
    user: state.user.info,
    albums: state.albums.items
  };
}

export default connect(mapStateToProps)(ContainerUserPage);
