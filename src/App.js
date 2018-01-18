import React, { Component } from 'react';
import logo from './logo.svg';
import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import AlbumPage from './components/AlbumPage';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const styles = require('./App.sass');

class App extends Component {
  render() {
    console.log(styles);
    return (
        <Router basename="/">
          <Switch>
            <Route path='/user/:userId' component={({ match })=>{
              const userId = match.params.userId;
              return <UserPage/>;
            }}/>
            <Route path='/album/:albumId' component={({ match })=>{
              const albumId = match.params.albumId;
              return <AlbumPage/>;
            }}/>
            <Route path='/users' component={()=>{
              return <UsersList/>;
            }}/>
            <Route path='/' component={()=>{
              return <UsersList/>;
            }}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
