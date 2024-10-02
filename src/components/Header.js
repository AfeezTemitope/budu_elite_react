import React from 'react';
import './style/Header.css';
import Befa from '../assets/befa.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Befa} alt="Logo" />
        <h1>BUDU ELITES FOOTBALL ACADEMY</h1>
      </div>
    </header>
  );
};

export default Header;
