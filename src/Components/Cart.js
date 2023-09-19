import React from 'react'
import "F:/e-commerce/src/Components/Styles/Cart.css"
import cartBanner from "../Media/banner4.jpg"
import Subtotal from './Subtotal';

function Cart() {
  return (
    <div className="cart">
        <div className="cartLeft">
                <img src={cartBanner} alt="" />
            
        <div>
          <h2 className="cartTitle">Your Checkout list</h2>
        </div>
        </div>
        <div className="cartRight">
        <Subtotal/>
        </div>
    </div>
  )
}

export default Cart