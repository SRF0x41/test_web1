import React from 'react';
import about_portrait from './photo_gallery/cait-gracelin-qMfpLxiTl4E-unsplash.jpg';

function About() {
  return (
    <div className='About'>
      <h1>About S.R Painting Solutions</h1>
      
      {/* New Flex Container to Hold Text and Image Side by Side */}
      <div className='about-content'>
        <div className='about-desc'>
          <p>
            Welcome to S.R Painting Solutions, your trusted partner for high-quality painting services in the Vail Valley. 
            Founded by Sergio Rodriguez, a skilled professional with nearly 20 years of experience, we take pride in transforming 
            homes and businesses with precision, care, and craftsmanship.
            <br /><br />
            At S.R Painting Solutions, we specialize in interior and exterior painting, custom finishes, deck staining, drywall 
            repair, and more. Whether you're refreshing your home's look or protecting your property from the elements, we use 
            premium materials and expert techniques to deliver flawless, long-lasting results.
            <br /><br />
            Our commitment to quality, reliability, and customer satisfaction has made us a go-to choice for homeowners and businesses 
            throughout the Vail Valley. With an eye for detail and a dedication to excellence, we ensure every project meets the highest standards.
            <br /><br />
            Let us bring your vision to life—contact us today for a consultation!
          </p>
        </div>
        
        <div className='about-image'>
          {/* Fixed the incorrect <image> tag to <img> */}
          <img src={about_portrait} alt='About Portrait' />
        </div>
      </div>
    </div>
  );
}

export default About;
