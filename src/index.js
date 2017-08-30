import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

//import React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import BaseLayout
import BaseLayout from './components/Layout';

//IMPORT COMPONENTS
import Splash from './components/Splash';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';


ReactDOM.render(
  // <App />

  <Router>
    <BaseLayout>
      <Switch>
        <Route path="/" component={Splash} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
      </Switch>
    </BaseLayout>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
