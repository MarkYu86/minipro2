import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Ensure the CSS is properly imported

function HomePage() {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/assets/gt7.mp4" type="video/mp4" />
      </video>
      <div className="homebtn">
        <Link to="/gallery">
          <button className="mainbtn">Find Your Vehicle</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
