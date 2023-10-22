import React, { useState } from 'react';
import '../Styles/Contact.css';
import Footer from '../Components/Footer';

function Contact() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      setNameError('Name is required');
    }

    if (location === '') {
      setLocationError('Location is required');
    }

    if (email === '') {
      setEmailError('Email is required');
    }

    if (address === '') {
      setAddressError('Address is required');
    }

    if (phone === '') {
      setPhoneError('Phone is required');
    }

  };

  return (
    <div className='contact'>
      <div className="contact-top">
        <h4>Contact Us</h4>
      </div>
      <div className='contact-bottom'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62708.81475118345!2d76.61270723793777!3d10.788248692736145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d31ad%3A0xf542d6eb7a870a56!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1684842768895!5m2!1sen!2sin"
          width="600"
          height="650"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>

        <div className='contact-form'>
          <h2>Contact Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
              {nameError && <span className="error">{nameError}</span>}
            </div>

            <div className="form-group">
              <label>Location:</label>
              <input type='text' name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
              {locationError && <span className="error">{locationError}</span>}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <span className="error">{emailError}</span>}
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
              {addressError && <span className="error">{addressError}</span>}
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
              {phoneError && <span className="error">{phoneError}</span>}
            </div>

            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
