import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {

    let navTitle = {
      "display": "inline",
    }
    return (

    <div>
      <nav>
            <ul>
                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/Splash">SplashPage</NavLink>
                </li>

                <li style={navTitle}>
                  <NavLink activeClassName="selected" className="nav-link" to="/Home">Home</NavLink>
                </li>

                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/About">About
                  </NavLink>
                </li>

                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
                </li>

                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contacts</NavLink>
                </li>

                <li style={navTitle}>
                  <NavLink activeClassName="selected" className="nav-link" to="/References">References</NavLink>
                </li>
            </ul>
      </nav>
      {this.props.children}
    </div>
    )
  }
}
