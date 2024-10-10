import React from 'react';
import './Rating.scss';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        //on a besoin que de l'index
        <i key={index} className={`fa-solid fa-star ${index < rating ? 'filled' : ''}`}></i>
      ))}
    </div>
  );
};

export default Rating;
