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
      	  <NavLink exact className="menu__item" to="/menu" onClick={ () => this.props.update(false) }>&#10006;</NavLink>
          <NavLink exact to="/" className="menu__item" activeClassName="menu__active" onClick={ () => {
            this.props.update(false);
            this.setState({ status: false });
            }
          }>Main Page</NavLink>
        <NavLink  to="/test" className="menu__item" activeClassName="menu__active" onClick={ () => {
            this.props.update(false);
            this.setState({ status: false });
            }
           }>Test</NavLink>
        </menu>
    );
  }
}

export default Menu;
