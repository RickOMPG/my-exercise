import './App.css';
import React from 'react';
import Content from './Content'


function Card() {
  return (
    <div className='content'>
      <Content 
        type='sedan'
        car='Sedan'
        carText='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' 
      />
      <Content 
        type='suv'
        car='Suv'
        carText='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' 
      />
      <Content 
        type='luxury' 
        car='Luxury'
        carText='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' 
      />
    </div>
  );
}

export default Card;