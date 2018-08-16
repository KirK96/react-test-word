import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from 'antd';

import { Routes } from 'src/app/Routes';

class BaseLayout extends React.Component {
  state = {
    menu: false,
  };

  handleClick = () => this.setState({ menu: !this.state.menu });

  onClose = () => {
    this.setState({
      menu: false,
    });
  }

  render() {
    const { menu } = this.state;

    return (
      <div>
        <Button className='sandwitch-wrapper' onClick={this.handleClick}>
          <i className='sandwitch' />
        </Button>
        <Drawer
          title={<h2 className='menu__item'>Menu</h2>}
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={menu}
        >
          <div className='menu'>
            <NavLink
              exact to='/theme'
              className='menu__item'
              onClick={() => {
                this.setState({ menu: false });
              }}
            >
              Theme
            </NavLink><br />
            <NavLink
              to='/test'
              className='menu__item'
              onClick={() => {
                this.setState({ menu: false });
              }}
            >
              Test
            </NavLink>
          </div>
        </Drawer>
        <Routes />
      </div>
    );
  }
}

export { BaseLayout };
