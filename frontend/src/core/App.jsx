import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from './components/Menu';
import Routes from './Routes';
// import CircleMenu from './core/components/CircleMenu';

class App extends Component {
  state = {
    menu: false
  }

  handleClick = event => this.setState({ menu: !this.state.menu });
  handleUpdate = status => this.setState({ menu: status });

  render() {
    const { menu } = this.state;

    return (
      <div className='app'>
        <a href='#0' className='sandwitch-wrapper' onClick={this.handleClick}><i className='sandwitch'></i></a>
        {/* <CircleMenu rRunner={8} rCircle={100} /> */}
        <Menu status={menu} update={this.handleUpdate} />

        <Routes theme={this.props.theme} />
      </div>
    );
  }
}

export default withRouter(App);