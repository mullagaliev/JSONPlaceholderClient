import React, { Component } from 'react';
import ContainerUsersList from './containers/UsersList';
import ContainerUserPage from './containers/UserPage';
import ContainerAlbumPage from './containers/AlbumPage';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router basename="/">
          <Switch>
            <Route path='/user/:userId' component={({ match }) => {
              const userId = match.params.userId;
              return <ContainerUserPage userId={userId}/>;
            }}/>
            <Route path='/album/:albumId' component={({ match }) => {
              const albumId = match.params.albumId;
              return <ContainerAlbumPage albumId={albumId}/>;
            }}/>
            <Route path='/users' component={() => {
              return <ContainerUsersList/>;
            }}/>
            <Route path='/' component={() => {
              return <ContainerUsersList/>;
            }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
