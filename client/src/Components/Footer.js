import React from 'react';
import Logo from '../assets/logo.jpeg';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Youtube from '../assets/youtube.png';
import FaceBook from '../assets/facebook.png';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <footer className="footer">
      <div className="lastpage">
        <div >
          <img alt='logo' className="logo"src={Logo}/>
        </div>

        <div className="second">
          <div>
            <h4>ABOUT</h4>
            <a href="/home">Who We Are</a>
            <a href="/home">Blog</a>
            <a href="/home">Work With Us</a>
            <a href="/home">Investor Relations</a>
            <a href="/home">Report Fraud</a>
            <a href="/home">Contact Us</a>
          </div>
          <div>
            <h4>LEARN MORE</h4>
            <a href="/home">Privacy</a>
            <a href="/home">Security</a>
            <a href="/home">Terms</a>
            <a href="/home">Sitemap</a>
            <a href="/home">Conditions</a>
          </div>

          <div className="box">
            <h4>SOCIAL LINKS</h4>
            <div className="icons">
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
              <img src={Youtube} alt="YouTube" />
              <img src={FaceBook} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
