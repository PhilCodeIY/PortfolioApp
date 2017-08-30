import React, { Component } from 'react';
//import the link ------
import { Link } from 'react-router-dom';


//IMPORT STYLES
import '../styles/App.css';

export default class Splash extends Component {
  render() {
//    INLINE STYLING
    let aboutStyle = {
      "backgroundColor": "gray",
      "padding": "100px"
     }
    return (
      <div>
        <section className="row" style={aboutStyle}>
            <h2 className="headings">
              Welcome to the world of React
            </h2>
              <hr/>
                  <p>This is a sample React Router application and portfolio</p>
              <hr/>
                  <p>This is a stylized portfolio and with funcitonality.</p>
            <div>
                <Link to="./Home">
                  <button id="next">
                    Learn more
                  </button>
                </Link>
            </div>
        </section>
      </div>
    );
  }
}
