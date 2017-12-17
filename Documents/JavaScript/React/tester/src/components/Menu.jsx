import React from 'react';
import { NavLink } from 'react-router-dom';


class Menu extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    status: props.status
  }
}

shouldComponentUpdate(nextProps, nextState) {
    if (this.props.status !== nextProps.status) {
      this.setState({ status: nextProps.status });
      return true;
    }
    if (this.state.status !== nextState.status) {
      return true;
    }
    return false;
  }

  render() {
    return (
        <menu type="context toolbar" className={`menu ${this.state.status ? "menu--open" : "menu--close"}`}>
      	  <a className="menu__item" href="#0" onClick={ () => this.props.update(false) }>&#10006;</a>
          <NavLink exact to="/theme" className="menu__item" onClick={ () => {
            this.props.update(false);
            this.setState({ status: false });
            }
          }>Theme</NavLink>
      	  <NavLink to="/test" className="menu__item" onClick={ () => {
            this.props.update(false);
            this.setState({ status: false });
            }
           }>Test</NavLink>
        </menu>
    );
  }
}

export default Menu;
