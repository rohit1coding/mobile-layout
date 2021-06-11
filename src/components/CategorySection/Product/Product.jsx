import React from 'react';
import product from './product.png';
import { Link } from 'react-router-dom';

import '../style.css';

const Product = (props) => {
  console.log(props);
  return (
    <Link to={`/product/${props.productID}`}>
      <div className="product mb-4">
        <div className="imageContainer">
          <img src={props.image?props.image:product} alt={"NO Image"} className="img-fluid" />
        </div>
        <div className="title">
          <p>{props.name}</p>
        </div>
        <div className="productPricing">
          <span className="badge rounded-pill bg-danger">
            <span style={{ textDecoration: 'line-through' }}>${props.price}</span> ${props.offerPrice}
          </span>
          <i className="bi bi-heart"></i>
        </div>
      </div>
    </Link>
  );
};

export default Product;
