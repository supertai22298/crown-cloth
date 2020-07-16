import React from 'react'
import './cart-dropdown.style.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton type="button">CHECK OUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
