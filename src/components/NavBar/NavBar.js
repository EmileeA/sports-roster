/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';
import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  buttonSwap = () => {
    const { authed } = this.props;
    if (!authed) {
      return (<Auth />);
    } if (authed) {
      return (<div className="btn btn-info" onClick={this.logMeOut}>Log Out</div>);
    }
  }


  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-light bg-light">
          <a className="narbar-brand" href="#">
            <img src="https://raw.githubusercontent.com/EmileeA/sports-roster/master/images/logo.png" alt="logo" />
          </a>
          {this.buttonSwap()}
          </nav>
      </div>
    );
  }
}


export default NavBar;
