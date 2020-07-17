import React from 'react'
import './cart-dropdown.style.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length > 0 && (
        <CustomButton
          type="button"
          onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
          }}
        >
          CHECK OUT
        </CustomButton>
      )}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
