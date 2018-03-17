import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = [
  {
    name: 'Theme',
    path: '/test-word/theme',
  },
  {
    name: 'Free Test',
    path: '/test-word/free-test',
  },
  {
    name: 'Test',
    path: '/test-word/test',
  },
];

class Menu extends React.Component {
  state = {
    status: this.props.status
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
    const { status } = this.state;

    return (
      <menu type='context toolbar' className={`menu ${status ? 'menu--open' : 'menu--close'}`}>
        <a className='menu__item' href='#0' onClick={() => this.props.update(false)}>&#10006;</a>
        {menuItem.map((item, index) =>
          <NavLink
            exact to={item.path}
            className='menu__item'
            key={index}
            onClick={() => {
              this.props.update(false);
              this.setState({ status: false });
            }}
          >
            {item.name}
          </NavLink>
        )}
      </menu>
    );
  }
}

export default Menu;
