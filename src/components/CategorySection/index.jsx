import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const ProductContainer = () => {

  const [data, setData] = useState()
  useEffect(() => {
    fetch("https://tas-server.herokuapp.com/api/projects",{
        method:"get",
    }).then(res=>res.json())
    .then(result=>{
      setData(result)
        console.log(result)
    })
  },[])
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
        <Product price= {199}  name= "Project-6" offerPrice= {149} image= "https://res.cloudinary.com/theallsafe/image/upload/v1621325105/theAllSafe/p7_yl3i71.jpg" productID= "60a37b9ee3ab044bf4d2c204"  />
        <Product price= {199}  name= "Project-6" offerPrice= {149} image= "https://res.cloudinary.com/theallsafe/image/upload/v1621325108/theAllSafe/p9_tjg9k6.jpg" productID= "60a37b9ee3ab044bf4d2c204"  />
      </div>

      <div className="heading ">
        <h5 className="text-bold">All Products</h5>
      </div>
      <div className="productsWrapper flex-wrap">
        {data?data.map((el) => (
          <Product price={el.basic.basePrice} name={el.name} offerPrice={el.basic.offerPrice} image={el.image} productID={el._id} />
        ))
      :<h2 style={{textAlign:"center",color:"red"}}>Loading...!!</h2>}
      </div>
    </div>
  );
};

export default ProductContainer;
