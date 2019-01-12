import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: string;
  className: string;
  handleClick: (id: string) => void;
  value: string;
}

class Button extends React.Component<IProps> {
  render() {
    const { id, className, handleClick, value } = this.props;

    return (
      <Link to={`/theme/${id}`} className={className} id={id} onClick={() => handleClick(id)}>
        {value ? value : ''}
      </Link>
    );
  }
}

export default Button;
