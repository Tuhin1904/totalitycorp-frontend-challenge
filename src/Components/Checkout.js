import React from 'react'
import "./Styles/Checkout.css"
import { useSelector } from 'react-redux';

function Checkout({pid,image, title, price, rating}) {

  const cartState = useSelector((state) => {
    return state.counter
  })
  return (
        <div className="chkoutProduct">
        <img src={image} alt="" />
        <div className="proInfo">
            <p className="ckhtitle">{title}</p>
            <p className="chkprice">
            ₹  <strong>{cartState.price}</strong>
            </p>
            <div className="chkRating">
                {Array(rating)
                .fill()
                .map(()=> (
                    <p>⭐</p>
                ))
                }
                </div>
            </div>
            <button>Remove from Cart</button>
        </div>
  )
}

export default Checkout