import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "5rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "5rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
    }
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "16px",
      "listStyleType": "none",
      "margin": 0,
      "padding": 0,
      "textDecoration": "none",
      "display": "inline",
    }
    return (
      <div>
        <nav>
              <ul>
                  <li style={navTitle}>
                    <NavLink to="/">
                      SplashPage&nbsp;&nbsp;
                    </NavLink>
                  </li>

                  <li style={navTitle}>
                    <NavLink to="/Home">
                      Home&nbsp;&nbsp;
                    </NavLink>
                  </li>

                  <li style={navTitle}>
                    <NavLink to="/About">
                      About &nbsp;&nbsp;
                    </NavLink>
                  </li>

                  <li style={navTitle}>
                    <NavLink to="/Portfolio">
                      Portfolio &nbsp;&nbsp;
                    </NavLink>
                  </li>

                  <li style={navTitle}>
                    <NavLink to="/Contacts">
                      Contacts &nbsp;&nbsp;
                    </NavLink>
                  </li>

                  <li style={navTitle}>
                    <NavLink to="/References">
                      References
                    </NavLink>
                  </li>
              </ul>
        </nav>

        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">Portfolio by &copy;Phil The Great </span>
          <span>
            | 301 Silver Grove St, Las Vegas NV 89144 | (516) 884-0756
          </span>
        </footer>
      </div>
    );
  }
}
