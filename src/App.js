import './App.css';
import logo from './images/MainLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
import PhotoGallery from './components/PhotoGallery.js';

// Import images
import home_portrait from './images/stock_image_vail1.jpg';

function Layout() {
  return (
    <div className="App">
      {/* Banner at the top */}
      <header className='banner'>
        <div className='banner-left'>
          <img src={logo} alt="Logo" className="banner-logo" />
          <h1>S.R Painting Solutions</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/photogallery">Photo Gallery</Link>
        </nav>
      </header>

      {/* Main content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 S.R Painting Solutions. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="home-portrait">
        <div className="home-portrait-image-container">
          <img src={home_portrait} alt="Home Portrait" className="home-portrait-image" />
        </div>
        <div className="home-portrait-text">
          <h2>Welcome to S.R Painting Solutions</h2>
          <p>We provide top-notch painting services for your home and business.</p>
          <p>Contact us today to bring color to your world!</p>
        </div>
      </div>
      {/* Services and Photo Gallery section */}
      <Services />
      <PhotoGallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
