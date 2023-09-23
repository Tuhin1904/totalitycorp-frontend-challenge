import React ,{useState} from 'react'
import "../Components/Styles/Cart.css"
import cartBanner from "../Media/banner4.jpg"
import Subtotal from './Subtotal';
import Checkout from './Checkout';
// import {useStateValue} from "./StateProvider"


function Cart() {
  // const[{cart},setCart]=useState()
  return (
    <div className="cart">
        <div className="cartLeft">
                <img src={cartBanner} alt="" />
            
        <div>
          <h2 className="cartTitle">Your Checkout list</h2>
          <Checkout/>
            
          
        </div>
        </div>
        <div className="cartRight">
        <Subtotal/>
        </div>
    </div>
  )
}

export default Cart