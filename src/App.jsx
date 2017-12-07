import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Test from './pages/Test';
import Main from './pages/Main';
import Menu from './components/Menu';

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
    render() {
        return (
          <div className="app">
            <a href="#0" className="sandwitch-wrapper" onClick={this.handleClick}><i className="sandwitch" ></i></a>
            <Route exact path="/"  render={ () => <Menu status={this.state.menu} update={this.handleUpdate}/>}/>
            <Switch>
              <Route exact path="/" component={Test}/>
              <Route path="/test" render={ () => <Main data={this.props.theme}/>}/>
            </Switch>
          </div>
        );
    }
}

export default withRouter(App);
