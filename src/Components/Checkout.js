import React from 'react';
import './Styles/Checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import products from './productinfo';

function Checkout({ pid, image, title, price, rating }) {
  const cartState = useSelector((state) => {
    return state.counter;
  });
  const removeFromBasket = useDispatch()
  return (
    <div>
      {cartState.pids.map((productId) => {
        const product = products.find((prod) => prod.pid === productId);
        return (
          <div className='chkoutProduct' style={{ marginLeft: '2rem', marginTop: '2rem' }}>
            <img src={product.image} alt='' style={{ maxWidth: '8rem',objectFit:"contain" }} />
            <div className='proInfo'>
              <p className='ckhtitle'>{product.ptitle}</p>
              <p className='chkprice'>
                ₹ <strong>{product.price}</strong>
              </p>
              <div style={{ display: 'flex' }} className='chkRating'>
                {Array(product.rating)
                  .fill()
                  .map(() => (
                    <p>⭐</p>
                  ))}
              </div>
              <button id="rButton" onClick={removeFromBasket(product.pid)}>Remove from Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
