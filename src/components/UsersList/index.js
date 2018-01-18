import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Table } from 'semantic-ui-react'
import DefaultAvatar from '../../static/defaultAvatar.jpg';

class UsersList extends Component {
  render() {
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
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={DefaultAvatar} rounded size='mini'/>
              <Header.Content>
                Leanne Graham
                <Header.Subheader>@Bret</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <a href="#">@Bret</a>
          </Table.Cell>
          <Table.Cell>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
          </Table.Cell>
          <Table.Cell>
            <a href="http://www.hildegard.org" target="_blank">hildegard.org</a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={DefaultAvatar} rounded size='mini'/>
              <Header.Content>
                Leanne Graham
                <Header.Subheader>@Bret</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <a href="#">@Bret</a>
          </Table.Cell>
          <Table.Cell>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
          </Table.Cell>
          <Table.Cell>
            <a href="http://www.hildegard.org" target="_blank">hildegard.org</a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={DefaultAvatar} rounded size='mini'/>
              <Header.Content>
                Leanne Graham
                <Header.Subheader>@Bret</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <a href="#">@Bret</a>
          </Table.Cell>
          <Table.Cell>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
          </Table.Cell>
          <Table.Cell>
            <a href="http://www.hildegard.org" target="_blank">hildegard.org</a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={DefaultAvatar} rounded size='mini'/>
              <Header.Content>
                Leanne Graham
                <Header.Subheader>@Bret</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <a href="#">@Bret</a>
          </Table.Cell>
          <Table.Cell>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
          </Table.Cell>
          <Table.Cell>
            <a href="http://www.hildegard.org" target="_blank">hildegard.org</a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src={DefaultAvatar} rounded size='mini'/>
              <Header.Content>
                Leanne Graham
                <Header.Subheader>@Bret</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <a href="#">@Bret</a>
          </Table.Cell>
          <Table.Cell>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
          </Table.Cell>
          <Table.Cell>
            <a href="http://www.hildegard.org" target="_blank">hildegard.org</a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>);
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

export default UsersList;
