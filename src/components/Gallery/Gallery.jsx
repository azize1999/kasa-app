import React, { useState, useCallback } from 'react';
import './Gallery.scss';

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);
  // l'etat actuel/changer l'etat actuel
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);  //prev = position

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="gallery">
      {images.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left"
            onClick={prevSlide}
            aria-label="Previous Slide"
          ></i>
          <i
            className="fa-solid fa-chevron-right"
            onClick={nextSlide}
            aria-label="Next Slide"
          ></i>
        </>
      )}

      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          {index === current && (
            <img src={image} alt={`Slide ${index + 1}`} className="image" />
          )}
        </div>
      ))}
      
      {images.length > 1 && (
        // 1/2 img
      <div className="slide-counter">
        {current + 1}/{images.length}
      </div>
        // Le numéro de l’image actuellement affichée (ajout de 1 parce que l’index commence à 0).
      )}
    </div>
  );
};
//pour apparaitre les numero d'image compté par numéro 
export default Gallery;
