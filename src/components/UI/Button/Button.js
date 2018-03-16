import React from 'react';
import './Button.css';

const Button = props => {
      return (
          <button className="btn1" name={props.name} onClick={props.click}>
              X
          </button>
      )
};

export default Button;