import React from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group';

import Button from './Button';
import data from '../data/data.js';
import keyWord from '../data/keyWord.js';

function getRandomDigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: keyWord[getRandomDigit(1, 443)],
      input: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("button");
    const item = this.state.title;
    const engTranslate = data[item];
    const wrapper = document.querySelector('.form__wrapper');
    const answer = document.querySelector('#answer');
    console.log(engTranslate);

    if (wrapper.classList.contains('form__aprove')) {
        this.setState({
           title: keyWord[getRandomDigit(1, 443)]
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
      <ReactTransitionGroup
        component="form"
        transitionName="formAnim"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        className="form"
        onSubmit={this.handleSubmit}>
        <label htmlFor="answer" className="form__label">{this.state.title}</label>
    		<ReactTransitionGroup
            component="div"
            transitionName="inputAnim"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionAppear={true}
            transitionAppearTimeout={1000}
            className="form__wrapper">
          <input type="text" className="form__input" autoComplete="off" id="answer" onChange={this.handleChange}/>
        </ReactTransitionGroup>
    		    <label htmlFor="check" className="form__button">Check</label>
    		<Button className="form__hide-button" id="check" type="submit" />
    	</ReactTransitionGroup>
    );
  }
}

export default Form;
