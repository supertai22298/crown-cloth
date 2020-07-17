import React from 'react'
import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem
