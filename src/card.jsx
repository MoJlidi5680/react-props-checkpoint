import React from 'react';

const Card = ({ el, alertOnClick }) => {
  return (
    <div className='card'>
      <img src={el.photo} alt="" srcSet="" />
      <h1>Name: {el.name}</h1>
      <h2>Age: {el.age}</h2>
      <h2>Country: {el.country}</h2>
      <button onClick={() => alertOnClick(el.name)}>Click Me</button>
    </div>
  );
};

export default Card;
