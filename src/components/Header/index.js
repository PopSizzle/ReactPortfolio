import React from 'react';
import './header.css';

function Header(){

  return(
    <header className="header" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Sam Poppe</h1>
    </header>
  );
}

export default Header;