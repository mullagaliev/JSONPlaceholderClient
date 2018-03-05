import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const style = require('./Menu.sass');

const randomUser = function (max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

class DefaultMenu extends Component {
  render() {
    return (<nav className={style.Menu}>
      <NavLink to='/users'
               className={style.MenuItem}
               activeClassName={style.MenuItemActive}>
        Users
      </NavLink>
      <NavLink to={'/user/' + randomUser(10)}
               className={style.MenuItem}
               activeClassName={style.MenuItemActive}>
        Random user
      </NavLink>
      <a className={classnames('ExternalLink')}
         href='https://github.com/mullagaliev/JSONPlaceholderClient'
         target='_blank'>
        Github
      </a>
    </nav>);
  }
}

DefaultMenu.propTypes = {};
DefaultMenu.defaultProps = {};

export default DefaultMenu;
