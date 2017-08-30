import React, { Component } from 'react';
//import the link ------
import { Link } from 'react-router-dom';
//import About from '../components/About';

//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {
  render() {
    // INLINE STYLING

    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/dish.jpg)",
      "backgroundSize": "cover",
      "backgroundColor": "lt gray",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              My History
            </h2>
            <hr/>
            <p className="primary-text">
              Check out the owner of this site, he is a little bit of a nerd that has always liked superheroes.
            </p>
            <div>
                <Link to="./Portfolio">
                  <button id="next">
                    Check out my Portfolio
                  </button>
                </Link>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
