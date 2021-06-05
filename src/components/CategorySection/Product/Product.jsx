import React from 'react';
import product from './product.png';
import { Link } from 'react-router-dom';

import '../style.css';

const Product = ({ title, price, offerPrice }) => {
  return (
    <Link to="/product">
      <div className="product mb-4">
        <div className="imageContainer">
          <img src={product} className="img-fluid" />
        </div>
        <div className="title">
          <p>Title</p>
        </div>
        <div className="productPricing">
          <span className="badge rounded-pill bg-danger">
            <span style={{ textDecoration: 'line-through' }}>$460</span> $320
          </span>
          <i className="bi bi-heart"></i>
        </div>
      </div>
    </Link>
  );
};

export default Product;
