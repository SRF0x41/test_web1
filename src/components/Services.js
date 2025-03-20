import React from 'react';
import './Services.css';  // Import the CSS for the Services page

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-blocks">
        <div className="service-block">
          <h2>Exterior Painting and Staining</h2>
          <p>We provide high-quality painting services for your home, including interior and exterior work.</p>
        </div>
        <div className="service-block">
          <h2>Interior Painting</h2>
          <p>We specialize in refinishing and restoring the interior surfaces of your home, such as cabinets, walls, and trim, to give them a fresh new look.</p>
        </div>
        <div className="service-block">
          <h2>Custom Finishes</h2>
          <p>We offer custom painting services, including faux finishes, murals, and more to give your space a unique touch.</p>
        </div>

      </div>
      <div className="services-blocks">
        <div className="service-block">
          <h2>Deck Painting and Staining</h2>
          <p>We provide expert deck painting and staining services to protect and beautify your outdoor space.</p>
        </div>
        <div className="service-block">
          <h2>Drywall Repair</h2>
          <p>We offer drywall repair services to ensure your walls are smooth and ready for painting.</p>
        </div>
        <div className="service-block">
          <h2>Faux Finishes</h2>
          <p>We offer power washing services to clean and prep surfaces, such as decks, driveways, and exteriors, before painting or staining.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
