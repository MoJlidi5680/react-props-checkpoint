import React from 'react';
import Card from './Card';

const Cards = ({ players, alertOnClick }) => {
  return (
    <div className='cards'>
      {players.map((el) => <Card el={el} alertOnClick={alertOnClick} />)}
    </div>
  );
};

export default Cards;
