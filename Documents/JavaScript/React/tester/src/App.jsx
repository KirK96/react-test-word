import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from './components/Menu';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleClick() {
    this.setState({ menu: !this.state.menu });
  }

  handleUpdate(status) {
    this.setState({ menu: status });
  }

  componentWillMount() {
    this.props.history.push('/theme');
  }
    render() {
      
        return (
          <div className="app">
            <a href="#0" className="sandwitch-wrapper" onClick={this.handleClick}><i className="sandwitch" ></i></a>
            <Menu status={this.state.menu} update={this.handleUpdate}/>
            <Router theme={this.props.theme}/>
          </div>
        );
    }
}

export default withRouter(App);