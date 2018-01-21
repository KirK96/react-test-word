import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import data from '../data/data.js';
import word from '../data/keyWord0.js';

function getRandomDigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFewLetter(word, number, text) {
  let beginWord = [];

  for (let index = 0; index < number; index++) {
    beginWord[index] = word.split('')[index];
  }

  return `${text} "${beginWord.join('').toUpperCase()}"`;
}

function randomWord(index) {
  console.log(index);

  if (!index) {
    index = getRandomDigit(1, 10);
  }

  let length = word[index].length - 1;
  let j = getRandomDigit(0, length);

  console.log('index', index, j);
  console.log('word', word[index][j]);

  return word[index][j];
}

@observer 
class Form extends React.Component {
  @observable isRight;
  @observable answer = '';
  @observable enable = false;
  @observable isShow = false;

  title = randomWord(this.props.index);
  tooltipText = 'Подсказка: первая буква';
  counter = 0;
  numberLetter = 1;

  handleSubmit = (event) => {
    event.preventDefault();

    this.counter++;
    this.engTranslate = data[this.title];

    console.log('counter', this.counter);
    console.log(this.engTranslate);

    if (!this.answer) {
      this.isShow = true;
    } 

    if (this.counter === 4) {
      this.isShow = true;
      this.numberLetter = 3;
      this.tooltipText = 'Подсказка: начало слова';
    }
    
    console.log('isRight', this.isRight);

    if (this.isRight) {
      this.title = randomWord(this.props.index);

      this.counter = 0;
      this.answer = '';
      this.isRight = false;
      this.enable = false;

      return;
    }

    this.isRight = this.engTranslate.toLowerCase() === this.answer.toLowerCase();
    this.enable = true;
  }

  handleChange = (event) => {
    this.answer = event.target.value;
  }

  reset = () => {
    this.enable = false;
    this.answer = '';
  }

  render() {  
    const tooltip = this.isShow ? getFewLetter(data[this.title], this.numberLetter, this.tooltipText) : '';
    const isRight = this.enable ? (this.isRight ? 'form__aprove' : 'form__error') : '';
    
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <label htmlFor='answer' className='form__label'>{this.title}</label>
    		<div className={`form__wrapper ${isRight}`}>
          <div className={`form__tooltip ${this.isShow ? 'form__tooltip-show' : ''}`}>{tooltip}</div>
          <input type='text' className='form__input' autoComplete='off' value={this.answer} id='answer' onChange={this.handleChange} />
          <div className="form__status" onClick={this.reset} />
        </div>
    		<label htmlFor='check' className='form__button'>Check</label>

    		<button className='form__hide-button' id='check' type='submit' />
    	</form>
    );
  }
}

export default Form;
