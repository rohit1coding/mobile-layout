import React from 'react';

import './style.css';

const BottomNavigation = () => {
  return (
    <div className="bottomNavigation">
      <div className="iconsContainer">
        <div>
          <i className="bi bi-house"></i>
          <p>Home</p>
        </div>
        <div>
          <i className="bi bi-chat-dots"></i>
          <p>Chat</p>
        </div>
        <div>
          <i className="bi bi-cart"></i>
          <p>Cart</p>
        </div>
        <div>
          <i className="bi bi-person"></i>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
