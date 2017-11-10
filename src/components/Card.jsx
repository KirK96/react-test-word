import React from 'react';

import Button from './Button';

function Card({ data }) {
  
  return (
    	<div className="c-theme">
    		<img className="c-theme__icon" src={`./img/${data.src}`} alt="img"/>
    		<h2 className="c-theme__title">{data.title}</h2>
        <Button className="c-theme__submit" value="Начать" id="data.id"/>
    	</div>
  );
}

export default Card;
