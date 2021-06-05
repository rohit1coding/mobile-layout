import React from 'react';
import BottomNavigation from '../BottomNavigation';

import './style.css';

const ProfileScreen = () => {
  return (
    <>
      <div className="container-x profileScreen">
        <div className="profileTop">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1622585578319-bb4251e2ca18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              alt="Profile Image"
              className="img-fluid"
            />
          </div>
          <div className="details">
            <h5 className="text-bold">Nicholas J. Echeverria</h5>
            <div className="d_wrapper">
              <div className="d">
                <h6 className="text-bold">MB 4350</h6>
                <p>ID Number</p>
              </div>
              <div className="d">
                <h6 className="text-bold">MB 4350</h6>
                <p>ID Number</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fullDetails">
          <div className="i_detail">
            <h6 className="text-bold">Full Name</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">User Name</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">Phone</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">E-mail Address</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">Shipping Address</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">Total Order</h6>
            <p>Dor Normane</p>
          </div>
          <hr />
          <div className="i_detail">
            <h6 className="text-bold">Edit Profile</h6>
            <p>Dor Normane</p>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default ProfileScreen;
