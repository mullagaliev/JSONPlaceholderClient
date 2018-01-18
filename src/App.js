import React, { Component } from 'react';
import logo from './logo.svg';
import UsersList from './components/UsersList';
import 'semantic-ui-css/semantic.min.css';

const styles = require('./App.sass');

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <UsersList/>
        </div>
      </div>
    );
  }
}

export default App;
