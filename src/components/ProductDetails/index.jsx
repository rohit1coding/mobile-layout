import React from 'react';
import './style.css';

import BottomNavigation from '../BottomNavigation';
import ProductCarousel from '../ProductCarousel';

const ProductDetails = () => {
  return (
    <>
      <ProductCarousel />
      <div className="container-x">
        <div className="section1">
          <h4>Product Name</h4>
          <h3>
            <span style={{ textDecoration: 'line-through' }}>$460</span> $320
          </h3>
          <div className="rating">
            <span className="stars">
              {[1, 2, 3, 4, 5].map((el) => (
                <i key={el} class="bi bi-star-fill"></i>
              ))}
            </span>
            <span class="badge rounded-pill bg-success">6</span>
          </div>
        </div>
        <hr />
        <div className="section2">
          <p style={{ fontSize: 16, paddingTop: 15 }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
            <br />
          </p>
          <span style={{ fontSize: 16 }} className="text-bold">
            Free Shipping
          </span>
          <p>To USA from seller via India. Shipping method online.</p>
          <hr />
          <p className="text-bold">
            <span
              className="bi bi-shield-lock mr-3"
              style={{ color: 'green' }}
            ></span>
            Secure Payment Method
          </p>
          <hr />
          <p className="text-bold">Specification</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="buttons">
          <button className="btn1">ADD TO CART</button>
          <button className="btn2">BUY NOW</button>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default ProductDetails;
