import React from 'react';

import Button from './Button';
import data from '../data/data.js';
import word from '../data/keyWord0.js';

function getRandomDigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomWord(index) {
  if (!index) {
    index = getRandomDigit(1, 10);
  }

  let length = word[index].length;
  let j = getRandomDigit(0, length);

  return word[index][j];
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: randomWord(this.props.index),
      input: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const item = this.state.title;
    const engTranslate = data[item];
    const wrapper = document.querySelector('.form__wrapper');
    const answer = document.querySelector('#answer');
    console.log(engTranslate);

    if (wrapper.classList.contains('form__aprove')) {
        this.setState({
           title: randomWord()
        });
      wrapper.classList.remove('form__aprove');
      answer.value = '';
      return;
    }

    if ( engTranslate.toLowerCase() === this.state.input.toLowerCase() ) {
      wrapper.classList.add('form__aprove');
      wrapper.classList.remove('form__error');
    } else {
      wrapper.classList.add('form__error');
      wrapper.classList.remove('form__aprove');
    }
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({ input });
  }


  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="answer" className="form__label">{this.state.title}</label>
    		<div className="form__wrapper">
          <input type="text" className="form__input" autoComplete="off" id="answer" onChange={this.handleChange}/>
        </div>
    		<label htmlFor="check" className="form__button">Check</label>
    		<Button className="form__hide-button" id="check" type="submit" />
    	</form>
    );
  }
}

export default Form;
