// Carousel.jsx
import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/img/Hotel3.jpg" className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide Label</h5>
            <p>Some description about the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="src/img/Hotel1.jpg" className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Label</h5>
            <p>Some description about the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="src/img/Hotel2.jpg" className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Label</h5>
            <p>Some description about the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
