import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcomponent from './Productcomponent';
import axios from 'axios';
import { setProduct  } from '../redux/actions/productactions';
function Productlisting() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((error) => {
      console.log('err', error);
    })
    dispatch(setProduct(response.data));
  }
  useEffect(()=>{
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("products:",products);
  return (
    <div className='ui grid container;'>
        <Productcomponent />
    </div>
  )
}

export default Productlisting
