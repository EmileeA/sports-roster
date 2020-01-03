/* eslint-disable import/extensions */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import './App.scss';
import NavBar from '../components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from '../../images/logo.png';

// function App() {
//   return (
//     <div className="App"><NavBar />
//     <div className="authContainer">
//       <img className="logo" src="http://www.pacificcrestcomedy.com/uploads/1/2/4/4/124445660/pccf-logo-full-color-v2-texture-1_orig.png" />

//       </div>
//     </div>
//   );
// }
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
        <img className="logo" src="http://www.pacificcrestcomedy.com/uploads/1/2/4/4/124445660/pccf-logo-full-color-v2-texture-1_orig.png" />
      </div>
      </div>
    );
  }
}

export default App;
