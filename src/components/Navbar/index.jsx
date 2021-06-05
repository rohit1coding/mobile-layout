import React from 'react';
import './style.css';
import logo from './icons/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="bar">
        <div className="container-x">
          <header>
            <div className="logo">
              <img src={logo} alt="tas logo" className="img-fluid" />
            </div>
            <div className="searchBar">
              <div className="searchIconWrapper">
                <div className="searchIcon"></div>
              </div>
              <input type="text" placeholder="Search anything" />
            </div>
            <div className="menu"></div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
