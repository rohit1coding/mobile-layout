import React from 'react';
import Product from './Product/Product';

const ProductContainer = () => {
  return (
    <div className="productContainer container-x">
      <div className="heading">
        <h5 className="text-bold">Best Sale</h5>
        <p>
          View All{' '}
          <span>
            <i className="bi bi-arrow-right"></i>
          </span>
        </p>
      </div>
      <div className="productsWrapper">
        <Product />
        <Product />
      </div>

      <div className="heading ">
        <h5 className="text-bold">All Products</h5>
      </div>
      <div className="productsWrapper flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
          <Product />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
