import React from 'react';
import '../Styles/About.css';
import Banner2 from '../assets/banner 2.webp';
import Footer from '../Components/Footer';

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <h4>About Us</h4>
      </div>
      <div className='about-bottom'>
        <h4 className='mission'>Our Mission</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='about-image'>
        <img alt='banner2' src={Banner2}></img>
      </div>
      <Footer />

    </div>
  )
}

export default About;
