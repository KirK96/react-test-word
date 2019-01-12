import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from 'antd';

import { Routes } from 'app/Routes';

const menuItems = [
  {
    url: '/theme',
    title: 'Theme',
  },
  {
    url: '/test',
    title: 'Test',
  },
];

class BaseLayout extends React.Component {
  state = {
    menu: false,
  };

  handleClick = () => this.setState({ menu: !this.state.menu });

  onClose = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    const { menu } = this.state;

    return (
      <div>
        <Button className="sandwitch-wrapper" onClick={this.handleClick}>
          <i className="sandwitch" />
        </Button>
        <Drawer
          title={<h2 className="menu__item">Menu</h2>}
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={menu}
        >
          <div className="menu">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                exact
                to={item.url}
                className="menu__item"
                onClick={() => {
                  this.setState({ menu: false });
                }}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </Drawer>
        <Routes />
      </div>
    );
  }
}

export { BaseLayout };
