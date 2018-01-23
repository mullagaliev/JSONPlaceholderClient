import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';
import ContentBlock from '../ContentBlock';
import Table from '../common/Table';

const style = require('./UsersList.sass');

class UsersList extends Component {
  GoToUser(userId) {
    window.location.pathname = '/user/' + userId;
  }

  render() {
    const { items } = this.props;
    return (<ContentBlock primary={true} title={'Users list'}>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>E-mail</th>
          <th>Website</th>
        </tr>
        </thead>
        <tbody>
        {
          items.length ? items.map((item) => {
            return (<tr key={item.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.GoToUser(item.id)}>
              <td>
                <div className={style.UserProfile}>
                  <div className={style.UserProfileAvatar}>
                    <img src={DefaultAvatar}/>
                  </div>
                  <div className={style.UserProfileInfo}>
                    <span className={style.UserProfileInfoName}>
                      {item.name}
                    </span>
                    <span className={style.UserProfileInfoUsername}>
                      @{item.username}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a href={'/user/' + item.id}>@{item.username}</a>
              </td>
              <td>
                <a className='ExternalLink' href='mailto:Sincere@april.biz'>{item.email}</a>
              </td>
              <td>
                <a className='ExternalLink' href={'http://www.' + item.website}
                   target='_blank'>{'www.' + item.website}</a>
              </td>
            </tr>);
          }) : null
        }
        </tbody>
      </Table>
    </ContentBlock>);
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

export default UsersList;
