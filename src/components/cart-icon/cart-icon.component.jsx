import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, totalCartQuantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalCartQuantity}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})
const mapStateToProps = createStructuredSelector({
  totalCartQuantity: selectCartItemCount,
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
