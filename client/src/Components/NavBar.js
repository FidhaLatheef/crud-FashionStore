import React from 'react';
import Logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css';


function NavBar() {
    return (
        <div className='navbar'>
            <div className="header">
                <div className='logo-container'>
                    <img className='logo' alt='logo' src={Logo} />
                </div>
                <div className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>                   
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                

            </div>
        </div>
    )
}

export default NavBar
