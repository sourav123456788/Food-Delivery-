import { StoreContext } from '../../context/storeContext'
import './PlaceOrder.css'
import React, { useContext } from 'react'

const placeOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);
  return (
   <form className='place-order'>
    <div className="place-order-left">
    <p className="title"> Delivery Information</p>
    <div className="multi-fields">
      <input type="text" placeholder='Frist Name' />
      <input type="text" placeholder='Last Name' />
    </div>
    <input type="email" placeholder='Email adress' />
    <input type="text" placeholder='street' />
    <div className="multi-fields">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
    </div>
    <div className="multi-fields">
      <input type="text" placeholder='Zip code' />
      <input type="text" placeholder='Country' />
    </div>
    <input type="text" placeholder='Phone' />
    </div>


    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${ getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default placeOrder

