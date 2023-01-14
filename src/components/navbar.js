import logo from '../../src/images/logo.png'
import '../components/navbar.css'
import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="yoyo" className="logo" />
      <div className="center-links">
        <nav>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Diversity">Diversity</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
