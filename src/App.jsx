import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from './components/Menu';
import Router from './Router';

class App extends Component {
  state = {
    menu: false
  }

  handleClick = event => this.setState({ menu: !this.state.menu });
  handleUpdate = status => this.setState({ menu: status });

  componentWillMount() {
    this.props.history.push('/react-test-word/theme/');
  }

  render() { 
    const { menu } = this.state;

    return (
      <div className="app">
        <a href="#0" className="sandwitch-wrapper" onClick={this.handleClick}><i className="sandwitch" ></i></a>
        <Menu status={menu} update={this.handleUpdate}/>
        <Router theme={this.props.theme}/>
      </div>
    );
  }
}

export default withRouter(App);