import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const randomUser = function (max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

class DefaultMenu extends Component {
  render() {
    return (
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Item as={Link} to='/users'>
              Users
            </Menu.Item>
            <Menu.Item as={Link} to={'/user/' + randomUser(10)}>
              Random user
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item className='item'>
                <Button circular
                        icon
                        as='a'
                        href='https://github.com/vray1995/JSONPlaceholderClient'
                        target='_blank'>
                  <Icon name='github' size='large'/>
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
    );
  }
}

DefaultMenu.propTypes = {};
DefaultMenu.defaultProps = {};

export default DefaultMenu;
