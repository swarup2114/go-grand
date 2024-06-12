import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../stylesComponents/header.css"
import { FaBars } from 'react-icons/fa'; 


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <h1>GO Grand</h1>
      <nav className={showMenu ? 'show' : ''}>
        <NavLink to="/" onClick={() => setShowMenu(false)}>
          Home
        </NavLink>
        <NavLink to="/menu" onClick={() => setShowMenu(false)}>
          Menu
        </NavLink>
        <NavLink to="/about" onClick={() => setShowMenu(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setShowMenu(false)}>
          Contact
        </NavLink>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
      <FaBars/>
      </div>
    </header>
  );
}

export default Header;
