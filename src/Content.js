import React from "react";
import classnames from "classnames";

function Content(props) {
    const cardStyle = classnames({
      "card": true,
      "card--sedan": props.type === "sedan",
      "card--suv": props.type === "suv",
      "card--luxury": props.type === "luxury"
    });
  
    let car = props.car;
    let carText = props.carText;
  
    return (
      <div className={cardStyle}>
        <div className='card-icon'></div>
        <p className='card-title'>{car}</p>
        <p className='card-information'>{carText}</p>
        <a className='card-link' href='#'>Learn More</a>
      </div>
    );
  }

  export default Content;