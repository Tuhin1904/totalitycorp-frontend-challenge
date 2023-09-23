import React from 'react'
import {useDispatch } from 'react-redux';
import "./Styles/Product.css";
import {addToCart} from "./redux/slices/counter";

function Products({id,title,image , price, rating }) {

  const addToBasket =useDispatch()
  

  return (
    <div className="product">
      <div className="pInfo">
        <p className="pTitle">{title}</p>
        <p className="pPrice">Rs <strong>{price}</strong>
        </p>
        <div className="rRating">
        {Array(rating).fill().map(()=>(<p>⭐</p>))}
        </div>
        <img src={image} alt="" />
        <button onClick={()=>{  
          addToBasket(
              addToCart({ price ,id})
        )}}>Add to cart</button>
      </div>
    </div>
  )
}
// ,addToBasket(addamount(price))
export default Products