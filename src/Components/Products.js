import React from 'react'

import "./Styles/Product.css"

function Products({title,image , price, rating }) {
  return (
    <div className="product">
      <div className="pInfo">
        <p className="pTitle">{title}</p>
        <p className="pPrice">Rs <strong>{price}</strong>
        </p>
        <div className="rRating">
        {rating}
        </div>
        <img src={image} alt="" />
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Products