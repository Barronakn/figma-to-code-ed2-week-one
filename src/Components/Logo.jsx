import React from 'react';
import logo from '../assets/Logo.png'

const Logo = () => {
    return (
        <a href="/">
            <img className='pointer-events-none' src={logo} alt="logo" />
        </a>
    );
};

export default Logo;