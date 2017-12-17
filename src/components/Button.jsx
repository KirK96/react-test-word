import React from 'react';
import { NavLink } from 'react-router-dom';

function Button(props) {
  
  return (
    props.value ?
      <NavLink to ={`/theme/${props.id}`} className={props.className} id={props.id} onClick={ () => props.handleClick(props.id) }>{props.value}</NavLink>
      :
      <NavLink to ={`/theme/${props.id}`} className={props.className} id={props.id} onClick={ () => props.handleClick(props.id) }></NavLink>

  );
}

export default Button;
