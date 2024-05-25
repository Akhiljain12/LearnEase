import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
  'image11.jpg'
];

export default function Imageslider() {
  return (
    <div 
      id="carouselExampleIndicators" 
      className="carousel slide" 
      data-ride="carousel" 
      style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}
    >
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
            style={{ backgroundColor: 'black' }}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ maxHeight: '600px' }}
          >
            <img 
              src={image} 
              className="d-block w-100" 
              alt={`Slide ${index + 1}`} 
              style={{ objectFit: 'cover', maxHeight: '600px' }}
            />
          </div>
        ))}
      </div>
      <a 
        className="carousel-control-prev" 
        href="#carouselExampleIndicators" 
        role="button" 
        data-slide="prev"
      >
        <span 
          className="carousel-control-prev-icon" 
          aria-hidden="true" 
          style={{ filter: 'invert(1)' }}
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a 
        className="carousel-control-next" 
        href="#carouselExampleIndicators" 
        role="button" 
        data-slide="next"
      >
        <span 
          className="carousel-control-next-icon" 
          aria-hidden="true" 
          style={{ filter: 'invert(1)' }}
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
