import React, { Component } from 'react';
import logo from './logo.svg';
import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import AlbumPage from './components/AlbumPage';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  getUsers,
  getUserById,
  getAlbumsByUserId,
  getPhotosByAlbumId
} from './services/JSONPlaceholder';

const styles = require('./App.sass');

class App extends Component {
  componentDidMount() {
    // Test api
    getUsers()
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    getUserById(2)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    getAlbumsByUserId(2)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    getPhotosByAlbumId(2)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  render() {
    return (
        <Router basename="/">
          <Switch>
            <Route path='/user/:userId' component={({ match }) => {
              const userId = match.params.userId;
              return <UserPage/>;
            }}/>
            <Route path='/album/:albumId' component={({ match }) => {
              const albumId = match.params.albumId;
              return <AlbumPage/>;
            }}/>
            <Route path='/users' component={() => {
              return <UsersList/>;
            }}/>
            <Route path='/' component={() => {
              return <UsersList/>;
            }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
