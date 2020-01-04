/* eslint-disable import/extensions */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import './App.scss';
import NavBar from '../components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComedianLineup from '../components/ComedianLineup/ComedianLineup';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App"><NavBar authed={authed} />
      <div className="authContainer">
         {
      (authed) ? (<ComedianLineup />) : (<img className="logo" src="https://raw.githubusercontent.com/EmileeA/sports-roster/master/images/logo.png" />)
    }
      </div>
      </div>
    );
  }
}

export default App;
