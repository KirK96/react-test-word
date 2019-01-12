import React from 'react';
import { bind } from 'lodash-decorators';

import Button from 'app/core/components/Button';

export interface ITheme {
  src: string;
  title: string;
  key: string;
}

interface IProps {
  theme: ITheme;
}

class Card extends React.Component<IProps> {
  @bind
  handleClick(id) {
    console.log('id,', id);
  }

  render() {
    const { theme } = this.props;

    return (
      <div className="c-theme">
        <img
          className="c-theme__icon"
          src={`/assets/images/themes/${theme.src}`}
          onContextMenu={(event) => event.preventDefault()}
          alt="img"
        />
        <h2 className="c-theme__title">{theme.title}</h2>
        <Button
          className="c-theme__submit"
          value="Начать"
          id={theme.key}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Card;
