import React from 'react'
import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, dispatch }) => {
  
  const { id, name, price, quantity, imageUrl } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => dispatch(clearItemFromCart(id))}>&#10005;</div>
    </div>
  )
}

export default connect()(CheckoutItem)

