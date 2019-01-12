import React from 'react';
import { bind } from 'lodash-decorators';

import Card from 'app/core/components/Card';
import { themes } from 'app/core/backend/theme';

class MainPage extends React.Component {
  state = {
    search: '',
  };

  @bind
  updateSearch(event) {
    const input = event.target.value;
    this.setState({ search: input });
  }

  render() {
    const wordThemes = this.state.search
      ? themes.filter(
          (obj) => obj.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
        )
      : themes;

    return (
      <div className="wrapper-theme">
        <input className="search" type="text" onChange={this.updateSearch} />
        <h1 className="title">Темы</h1>
        {wordThemes.map((theme) => (
          <Card theme={theme} key={theme.key} />
        ))}
      </div>
    );
  }
}

export default MainPage;
