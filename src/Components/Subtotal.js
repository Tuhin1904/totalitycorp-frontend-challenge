import React from 'react'
import "./Styles/Subtotal.css"
import { useSelector } from 'react-redux';

function Subtotal() {

    const cartState = useSelector((state) => { 
        return  state.counter})
    
    // const total = useSelector((state) => state.counter.addamount)
  return (
  <div className="subtotal">    
              <p>Subtotal ({cartState.nProducts} items): <strong>
              ₹ {cartState.totalPrice}
              </strong></p> 
                 <small className="isGift">
                    <input type="checkbox" />This order contains a gift
                 </small>
            
        
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal