import React, {Component} from 'react';


export default class BaseLayout extends Component {
  render(){
    return (
      <div>

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
