import React from 'react';

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

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: randomWord(this.props.index),
      input: '',
      tooltipText: 'Подсказка: первая буква',
    };

    this.counter = 0;
    this.numberLetter = 1;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('counter', this.counter);
    this.counter++;

    let wrapper = document.querySelector('.form__wrapper');
    let answer = document.querySelector('#answer');
    let tooltip = document.querySelector('.form__tooltip');

    tooltip.classList.remove('form__tooltip-show');

    const item = this.state.title;
    const engTranslate = data[item];

    console.log(engTranslate);

    if (!answer.value) {
      tooltip.classList.add('form__tooltip-show');
    } 

    if (this.counter == 4) {
      this.numberLetter = 3;
      tooltip.classList.add('form__tooltip-show');
      this.setState({ tooltipText: 'Подсказка: начало слова' });
    }
    
    if (wrapper.classList.contains('form__aprove')) {
      this.setState({
          title: randomWord(this.props.index)
      });

      this.counter = 0;
      wrapper.classList.remove('form__aprove');
      answer.value = '';

      return;
    }

    if (engTranslate.toLowerCase() === this.state.input.toLowerCase()) {
      wrapper.classList.add('form__aprove');
      wrapper.classList.remove('form__error');
    } else {
      wrapper.classList.add('form__error');
      wrapper.classList.remove('form__aprove');
    }
  }

  handleChange = (event) => {
    const input = event.target.value;
    this.setState({ input });
  }

  reset = () => {
    let answer = document.querySelector('#answer');
    let wrapper = document.querySelector('.form__wrapper');

    if (wrapper.classList.contains('form__error')) {
      wrapper.classList.remove('form__error');
      answer.value = '';
    }
  }

  render() { 
   // const temp = engTranslate.toLowerCase() === this.state.input.toLowerCase();
   // console.log(temp);
    
    const tooltip = getFewLetter(data[this.state.title], this.numberLetter, this.state.tooltipText);
    
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <label htmlFor='answer' className='form__label'>{this.state.title}</label>
    		<div className='form__wrapper'>
          <div className="form__tooltip">{tooltip}</div>
          <input type='text' className='form__input' autoComplete='off' id='answer' onChange={this.handleChange} />
          <div className="form__status" onClick={this.reset} />
        </div>
    		<label htmlFor='check' className='form__button'>Check</label>

    		<button className='form__hide-button' id='check' type='submit' />
    	</form>
    );
  }
}

export default Form;
