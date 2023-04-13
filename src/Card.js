import './App.css';
import classnames from 'classnames';
import React from 'react';

function Content(props) {
  const cardStyle = classnames({
    "card": true,
    "card--orange": props.color === "orange",
    "card--blue": props.color === "blue",
    "card--green": props.color === "green"
  });

  return (
    <div className={cardStyle}>
      <div className='card-icon'></div>
      <span className='card-title'>Sedans</span>
      <p className='cart-information'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
      <a className='card-link' href='#'>Learn More</a>
    </div>
  );
}

export default function Card() {
  return (
    <div className='content'>
      <Content color='orange' />
      <Content color='blue' />
      <Content color='green' />
    </div>
  );
}