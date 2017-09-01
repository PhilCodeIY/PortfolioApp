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
import Contact from './components/Contact';
import References from './components/References';


ReactDOM.render(
  // <App />

  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/References" component={References} />
      </Switch>
    </BaseLayout>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
