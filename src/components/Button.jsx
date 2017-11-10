import React from 'react';

function Button(props) {
  return (
    props.value ?
      <button className={props.className} id={props.id} {...props}>{props.value}</button>
      :
      <button className={props.className} id={props.id} {...props}></button>

  );
}

export default Button;
