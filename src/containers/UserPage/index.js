import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../../components/UserPage';
import { connect } from 'react-redux';
import { getUserById } from '../../actions';

class ContainerUserPage extends Component {
  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatch(getUserById(userId));
  }

  render() {
    const { user } = this.props;
    return (<UserPage user={user}/>);
  }
}

ContainerUserPage.propTypes = {};
ContainerUserPage.defaultProps = {};

function mapStateToProps(state) {
  return {
    user: state.user.info
  };
}

export default connect(mapStateToProps)(ContainerUserPage);
