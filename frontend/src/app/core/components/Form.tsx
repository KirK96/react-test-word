import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import data from 'src/app/core/backend/data.ts'; // Переделать
import word from 'src/app/core/backend/keyWord.ts';

interface IProps {
  index: number;
}

function getRandomDigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFewLetter(currentWord, numberLetter, text) {
  const beginWord = [];

  for (let index = 0; index < numberLetter; index++) {
    beginWord[index] = currentWord.split('')[index];
  }

  return `${text} '${beginWord.join('').toUpperCase()}'`;
}

function randomWord(index) {
  console.log(index);

  if (!index) {
    index = getRandomDigit(1, 10);
  }

  const length = word[index].length - 1;
  const j = getRandomDigit(0, length);

  console.log('index', index, j);
  console.log('word', word[index][j]);

  return word[index][j];
}

@observer
class Form extends React.Component<IProps> {
  @observable isRight;
  @observable answer = '';
  @observable enable = false;
  @observable isShowTip = false;
  @observable tooltipText = 'Подсказка: первая буква';
  @observable title = randomWord(this.props.index);

  incorrectResponseСount = 0;
  numberLetter = 1;

  handleSubmit = (event) => {
    event.preventDefault();

    this.incorrectResponseСount++;
    const engTranslate = data[this.title];

    console.log('incorrectResponseСount', this.incorrectResponseСount);
    console.log(engTranslate);

    if (!this.answer) { this.isShowTip = true; }

    if (this.incorrectResponseСount === 4) {
      this.isShowTip = true;
      this.numberLetter = 3;
      this.tooltipText = 'Подсказка: начало слова';
    }

    console.log('isRight', this.isRight);

    if (this.isRight) {
      this.onSuccess();
      return;
    }

    this.isRight = engTranslate.toLowerCase() === this.answer.toLowerCase();
    this.enable = true;
  }

  onSuccess = () => {
    this.title = randomWord(this.props.index);

    this.incorrectResponseСount = 0;
    this.answer = '';
    this.isRight = false;
    this.enable = false;
    this.isShowTip = false;
  }

  handleChange = (event) => {
    this.answer = event.target.value;
  }

  reset = () => {
    this.enable = false;
    this.answer = '';
  }

  render() {
    const tooltip = this.isShowTip ? getFewLetter(data[this.title], this.numberLetter, this.tooltipText) : '';
    const isRight = this.enable ? (this.isRight ? 'form__aprove' : 'form__error') : '';

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label htmlFor='answer' className='form__label'>{this.title}</label>
        <div className={`form__wrapper ${isRight}`}>
          <div className={`form__tooltip ${this.isShowTip ? 'form__tooltip-show' : ''}`}>{tooltip}</div>
          <input
            type='text'
            className='form__input'
            autoComplete='off'
            value={this.answer}
            id='answer'
            onChange={this.handleChange}
          />
          <div className='form__status' onClick={this.reset} />
        </div>

        <label htmlFor='check' className='form__button'>Проверить</label>
        <button className='form__hide-button' id='check' type='submit' />

        <a
          href='#0'
          className='form__button'
          style={{ textDecoration: 'none' }}
          onClick={this.onSuccess}
        >
          Следующее слово
        </a>
      </form>
    );
  }
}

export default Form;
