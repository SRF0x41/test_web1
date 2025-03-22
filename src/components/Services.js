import React from 'react';
import './Services.css';  // Import the CSS for the Services page
import exterior_stain from '../images/IMG_1445.jpeg'

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-blocks">
        <div className="service-block">
          <h2>Exterior Painting and Staining</h2>
          <p>We provide durable painting and staining for the exterior of your home. Our services help protect your property from weather damage while improving its appearance.</p>
          <img src={exterior_stain}></img>
        </div>
        <div className="service-block">
          <h2>Interior Painting</h2>
          <p>We offer professional interior painting to freshen up your living spaces. Whether it’s walls, trim, or ceilings, we deliver clean and even results that last.</p>
        </div>
        <div className="service-block">
          <h2>Custom Finishes</h2>
          <p>If you're looking for something unique, we offer custom painting services like faux finishes and murals to give your home a personal touch.</p>
        </div>
      </div>
      <div className="services-blocks">
        <div className="service-block">
          <h2>Deck Painting and Staining</h2>
          <p>Our deck painting and staining services protect your outdoor spaces from the elements while keeping them looking good year-round.</p>
        </div>
        <div className="service-block">
          <h2>Drywall Repair</h2>
          <p>We repair drywall to ensure a smooth, even surface before painting, whether it’s fixing holes or cracks.</p>
        </div>
        <div className="service-block">
          <h2>Power Washing</h2>
          <p>Our power washing service cleans your outdoor surfaces, removing dirt and old finishes to prepare for painting or staining.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
