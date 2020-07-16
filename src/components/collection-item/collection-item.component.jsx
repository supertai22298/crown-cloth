import React from 'react'

import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item

  return (
    <div className="collection-item">
      <div className="image" style={{ background: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted={true} onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
