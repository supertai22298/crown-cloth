import React from 'react'
import './cart-dropdown.style.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton type="button">CHECK OUT</CustomButton>
  </div>
)

export default CartDropdown