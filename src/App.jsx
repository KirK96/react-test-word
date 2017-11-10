import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
            <Menu status={this.state.menu} update={this.handleUpdate}/>
            <Switch>
              <Route exact path="/" render={ () => <Main data={this.props.theme}/>}/>
              <Route path="/test" component={Test}/>
            </Switch>
          </div>
        );
    }
}

export default App;
