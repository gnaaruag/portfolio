import React, { useState } from "react";
import './css/main.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''} `}>
      <div className="branding isans">
        <a className="always font-2xl font-bold" href="/">
          {"<Gaurang />"}
        </a>
      </div>
      <div className="toggle-button" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'active1' : 'inactive1'}`} id="bar1"></span>
        <span className={`bar ${isMenuOpen ? 'active2' : 'inactive2'}`} id="bar2"></span>
        <span className={`bar ${isMenuOpen ? 'active3' : 'inactive3'}`} id="bar3"></span>
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <ul className="link-content">
          <li><a className="link" href="#about">stack<i className=""></i></a></li>
          <li><a className="link" href="#experience">experience</a></li>
          <li><a className="link" href="/"> play<i className=""></i></a></li>
          <li><a className="link" href="/"> contact<i className=""></i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
