import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../static/defaultAvatar.jpg';
import MarkerIcon from '../common/icons/Marker';
import PhoneIcon from '../common/icons/Phone';
import ChatIcon from '../common/icons/Chat';
import WebIcon from '../common/icons/Web';
import PhoneNumber from '../common/PhoneLink';

const style = require('./UserProfile.sass');

class UserProfile extends Component {

  render() {
    const { user } = this.props;
    if (!user.id)
      return null;
    return (<div className={style.UserProfile}>
      <div className={style.PrimaryInfo}>
        <div className={style.PrimaryInfoAvatar}>
          <img src={user.image ? user.image : DefaultAvatar} alt=""/>
        </div>
        <div className={style.PrimaryInfoDesc}>
          <span className={style.PrimaryInfoDescMeta}>
            Username <a href={'/user/' + user.id}
                        className={style.PrimaryInfoDescMetaPrimary}>@{user.username}</a>
          </span>
          <h1 className={style.PrimaryInfoDescTitle}>
            {user.name}
          </h1>
          <span className={style.PrimaryInfoDescExtra}>
            {user.company.name}, {user.company.bs}
          </span>
        </div>
        <div className={style.PrimaryInfoRating}>

        </div>
      </div>
      <div className={style.AdditionalInfo}>
        <div className={style.AdditionalInfoElem}>
          <MarkerIcon className={style.AdditionalInfoElemIcon} width={'40px'} height={'40px'}/>
          <span className={style.AdditionalInfoElemTitle}>
            {user.address.city}
            <br/>
            {user.address.street} {user.address.suite}
          </span>
        </div>
        <div className={style.AdditionalInfoElem}>
          <PhoneIcon className={style.AdditionalInfoElemIcon} width={'40px'} height={'40px'}/>
          <PhoneNumber number={user.phone}
                       className={style.AdditionalInfoElemTitle}
                       isLinked={true}/>
        </div>
        <div className={style.AdditionalInfoElem}>
          <ChatIcon className={style.AdditionalInfoElemIcon} width={'40px'} height={'40px'}/>
          <a href={'mailto:' + user.email} className={style.AdditionalInfoElemTitle}>
            Send an email
          </a>
        </div>
        <div className={style.AdditionalInfoElem}>
          <WebIcon className={style.AdditionalInfoElemIcon} width={'40px'} height={'40px'}/>
          <a href={'http://www.' + user.website} target='_blank'
             className={style.AdditionalInfoElemTitle}>
            www.{user.website}
          </a>
        </div>
      </div>
    </div>)
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
