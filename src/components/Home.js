import React, { Component } from 'react';
// import Home from '../components/Home';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {

    let style = {
      "backgroundColor": "gray",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }

    return (
        <div>
          <section className="row" style={style}>
              <h2>This is the home page</h2>
                <hr/>
                  <p>
                    Welcome!! Enjoy the site and the react qualities
                  </p>
                  <div>
                      <Link to="./Portfolio">
                        <button id="next">
                          Check out my Portfolio
                        </button>
                      </Link>
                  </div>
          </section>
        </div>
      );
    }
  }
