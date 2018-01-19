import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../../components/UserPage';
import { connect } from 'react-redux';
import { getUserById, getAlbumsByUserId } from '../../actions';

class ContainerUserPage extends Component {
  Update(userId) {
    this.props.dispatch(getUserById(userId));
    this.props.dispatch(getAlbumsByUserId(userId));
  }

  componentDidMount() {
    const { userId } = this.props;
    this.Update(userId);
  }

  shouldComponentUpdate(nextProps) {
    const { userId } = nextProps;
    if (userId === this.props.userId) {
      return true;
    }
    this.Update(userId);
    return true;
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
