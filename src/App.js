import './App.css';
import logo from './images/MainLogo.png'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Banner at the top */}
        <header className='banner'>
          <img src={logo} alt="Logo" className="banner-logo" />
          <h1>
            S.R Painting Solutions
          </h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>


        

        {/* Page Content */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router >
  );
}

export default App;
