/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
function Productcomponent() {
  const products = useSelector((state) => state.allproducts.product)
  const renderlist = products.map((product)=>{
      const {id,title,image,price,category} = product 




      
        return (
          <div className='four column wide' key = {id}>
            <Link to={  `/product/${id}`}>
           <div class="ui link card">
        <div class="image">
          <img src={image} alt="Placeholder Image" />
        </div>
          <div class="header">{title}</div>
        <div class="content">
          {/* <div class="meta price">INR  {price}</div>
          <div class="meta">{category}</div> */}
          
        </div>
        <div class="extra content">
      
          <span class="right floated">{category}</span>
          <span><i class=""></i>INR {price} </span>
        </div>
      </div>
      
            </Link>
              {/* <h1>Product Component</h1> */}
          </div>
        )
  })


  return (
    <>
    {renderlist}
    </>
  );
}

export default Productcomponent
