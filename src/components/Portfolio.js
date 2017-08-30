import React, { Component } from 'react';
// IMPORT EMAIL COMPONENT
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom';

export default class Find extends Component {
  render() {
    // INLINE STYLING
    let style = {

      "backgroundColor": "gray",
      "imgSize": "10%",
      "height": "100%",
      "padding": "100px"
    }

    return (
      <div>
        <section className="row" style={style}>
          <div>
            <h3>Sample Portfolio</h3>
                <img src="http://www.dccomics.com/sites/default/files/GalleryChar_1900x900_FL23_6-7_52ab8f8d847397.15032461.jpg"  alt = "The Flash" height="300" width="900" />
                <div>
                    <Link to="./Home">
                      <button id="next">
                        Check out my Home Page
                      </button>
                    </Link>
                </div>
          </div>
        </section>
      </div>
)
}

}
