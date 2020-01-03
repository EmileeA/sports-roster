/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <nav class="navbar navbar-light bg-light">
          <a class="narbar-brand" href="#">
            <img src="http://www.pacificcrestcomedy.com/uploads/1/2/4/4/124445660/pccf-logo-full-color-v2-texture-1_orig.png" alt="logo" />
          </a>
          <button className="btn btn-outline-info">Log In</button>
          </nav>
      </div>
    );
  }
}

export default NavBar;
