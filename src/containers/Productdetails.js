/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productactions';

function Productdetails() {
  const product = useSelector((state)=> state.product)
  const {title,image,price,category,description} = product
  const {productId} = useParams();
  console.log(productId)
  const duspatch = useDispatch()
  const fetchProductsdetail = async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log(err)
    })
    duspatch(selectedProduct(response.data));
  }
  useEffect(()=>{
    if(productId && productId !== "") fetchProductsdetail();
  },[productId])
  return (
    <div>
       <div class="ui container">
  <div class="ui stackable grid">
    <div class="six wide column">
      <div class="ui card">
        <div class="image">
          <img src={image} />
        </div>
        <div class="content">
          <div class="header">{title}</div>
          <div class="meta">
            <span class="price">INR {price}</span>
            <span class="right floated">
              <i class="star icon"></i>
              <i class="star icon"></i>
              <i class="star icon"></i>
              <i class="empty star icon"></i>
              <i class="empty star icon"></i>
            </span>
          </div>
          <div class="description">
            {description}
          </div>
        </div>
        <div class="extra content">
          <div class="ui large buttons">
            <button class="ui button">Add to Cart</button>
            <div class="or"></div>
            <button class="ui teal button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="ten wide column">
      <div class="ui segment">
        <div class="ui header">Product Details</div>
        <table class="ui very basic table">
          <tbody>
            <tr>
              <td>Product Type</td>
              <td>{category}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Brand Name</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Black</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Productdetails
