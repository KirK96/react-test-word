import React from 'react';

import Card from '../core/components/Card';

class MainPage extends React.Component {

  constructor() {
    super();

    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    const input = this.refs.search.value;
    this.setState({ search: input });
  }

  render() {
    const info = this.state.search ? this.props.data.filter(obj => obj.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) : this.props.data;
    return (
      <div className="wrapper-theme">
        <input className="search" type="text" ref="search" onChange={this.updateSearch} />
        <h1 className="title">
          Темы
              </h1>
        {info.map((value, index) =>
          <Card data={value} key={index} />
        )
        }
      </div>
    );
  }
}

export default MainPage;
