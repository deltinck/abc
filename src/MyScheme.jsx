// src/MyScheme.jsx
import React, { useEffect } from 'react';
import './MyScheme.css';
import CategoryGrid from './CategoryGrid';
import Footer from './Footer';
import Highlight from './Highlight';

function MyScheme() {
  useEffect(() => {
    let index = 0;
    const slider = document.getElementById('slider');
    const totalImages = slider?.children.length || 0;

    const interval = setInterval(() => {
      index = (index + 1) % totalImages;
      if (slider) {
        slider.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="title-bar">
        <div className="title-container">
          <div className="logo-section">
            <img
              src="/emblemmm.png"
              alt="Emblem of India"
              className="emblem"
            />
            <h1 className="logo-title fade-in">
              <span>Yojana</span><span> Connect        </span>
            </h1>
             <img
              src="/elephanttt.png"
              alt="Emblem of India"
              className="emblemm"
            />

          </div>

          <nav className="top-navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Schemes</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Carousel */}
      <header className="header">
        <div className="carousel">
          <div id="slider" className="slider">
            <img src="/students.jpg" />
            <img src="/student1.jpg" />
            <img src="/student2.jpg" />
          </div>
        </div>
      </header>

      {/* Highlight Section */}
      <Highlight />

      {/* Hero Section */}
      <section className="hero fade-in">
        <h2>Find the Right Government Schemes for You</h2>
        <p>Search and filter thousands of central and state government welfare schemes in one place.</p>
        <a href="#scheme-interface">Explore Schemes</a>
      </section>

      <CategoryGrid />
      <Footer />
    </div>
  );
}

export default MyScheme;
