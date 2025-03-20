import React from 'react';
import './PhotoGallery.css'; // Import the CSS for styling

function PhotoGallery() {
    // Correcting image paths based on your file structure
    const images = [
        '/photo_gallery/cait-gracelin-qMfpLxiTl4E-unsplash.jpg',
        '/photo_gallery/glade-optics-DumeSMuXgao-unsplash.jpg',
        '/photo_gallery/katie-musial-Gk-cKDPhwmg-unsplash.jpg',
        '/photo_gallery/rebekah-blocker-g6Nt0q_xKIE-unsplash.jpg',
    ];

    return (
        <div className="photo-gallery">
            <h1>Photo Gallery</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
