import React, { useEffect, useState } from 'react';
import './style.css';

import BottomNavigation from '../BottomNavigation';
import ProductCarousel from '../ProductCarousel';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {productID}=useParams()
  const [data,setData]=useState()
  useEffect(()=>{
    fetch(`https://tas-server.herokuapp.com/api/projects/${productID}`,{
      method:"get"
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        setData(result)
        // console.log(data.image)
    })
},[])

  return (
    <>
    {data?
      <div>
      <ProductCarousel image={data.image} />
      
      <div className="container-x">
        <div className="section1">
          <h4>{data.name}</h4>
          <h3>
            <span style={{ textDecoration: 'line-through' }}>${data.basic.basePrice}</span> ${data.basic.offerPrice}
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
      </div>
      :<h2 style={{textAlign:"center",color:"red"}}>Loading...!!</h2>}
    </>
  );
};

export default ProductDetails;
