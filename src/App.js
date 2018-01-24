import React, { Component } from 'react';
import ContainerUsersList from './containers/UsersList';
import ContainerUserPage from './containers/UserPage';
import ContainerAlbumPage from './containers/AlbumPage';
import Layout from './layouts/DefaultLayout';
import './style/global/semantic.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router basename="/">
          <Switch>
            <Route path='/user/:userId' component={({ match }) => {
              const userId = match.params.userId;
              return <Layout>
                <ContainerUserPage userId={userId}/>
              </Layout>;
            }}/>
            <Route path='/album/:albumId' component={({ match }) => {
              const albumId = match.params.albumId;
              return <Layout>
                <ContainerAlbumPage albumId={albumId}/>
              </Layout>;
            }}/>
            <Route path='/users' component={() => {
              return <Layout>
                <ContainerUsersList/>
              </Layout>;
            }}/>
            <Route path='/' component={() => {
              return <Layout>
                <ContainerUsersList/>
              </Layout>;
            }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
