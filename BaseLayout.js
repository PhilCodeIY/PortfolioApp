





class BaseLayout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      {// This should house Header and Footer components and be able to house any children components.
      }
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <nav>
        <div id = "navigation">Navigation Bar</div>
      </nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id = "footer">&copy; Phil The Great</div>
      </footer>
      );
    }
  }
