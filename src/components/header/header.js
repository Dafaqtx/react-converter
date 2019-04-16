import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          Converter
        </a>
      </nav>
    </header>
  );
};

export default Header;
