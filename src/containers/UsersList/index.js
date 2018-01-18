import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsersList from '../../components/UsersList';
import { connect } from 'react-redux';
import { getUsers } from '../../actions';

class ContainerUsersList extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    const { users } = this.props;
    return (
        <UsersList items={users}/>
    );
  }
}

ContainerUsersList.propTypes = {};
ContainerUsersList.defaultProps = {};

function mapStateToProps(state) {
  return {
    users: state.users.items
  };
}

export default connect(mapStateToProps)(ContainerUsersList);
