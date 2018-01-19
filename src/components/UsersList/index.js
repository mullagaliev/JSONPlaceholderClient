import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Table } from 'semantic-ui-react'
import DefaultAvatar from '../../static/defaultAvatar.jpg';

class UsersList extends Component {
  GoToUser(userId) {
    window.location.pathname = '/user/' + userId;
  }

  render() {
    const { items } = this.props;
    return (<Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          items.length ? items.map((item) => {
            return (<Table.Row key={item.id}
                               style={{cursor: 'pointer'}}
                               onClick={() => this.GoToUser(item.id)}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={DefaultAvatar} rounded size='mini'/>
                  <Header.Content>
                    {item.name}
                    <Header.Subheader>@{item.username}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <a href={'/user/' + item.id}>@{item.username}</a>
              </Table.Cell>
              <Table.Cell>
                <a href='mailto:Sincere@april.biz'>{item.email}</a>
              </Table.Cell>
              <Table.Cell>
                <a href={'http://www.' + item.website} target='_blank'>{item.website}</a>
              </Table.Cell>
            </Table.Row>);
          }) : null
        }
      </Table.Body>
    </Table>);
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

export default UsersList;
