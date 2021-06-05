import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const BottomNavigation = () => {
  return (
    <div className="bottomNavigation">
      <div className="iconsContainer">
        <div>
          <i className="bi bi-house"></i>
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div>
          <i className="bi bi-chat-dots"></i>
          <Link>
            <p>Chat</p>
          </Link>
        </div>
        <div>
          <i className="bi bi-cart"></i>
          <Link>
            <p>Cart</p>
          </Link>
        </div>
        <div>
          <i className="bi bi-person"></i>
          <Link to="/profile">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
