import React from 'react'

import './collection-item.style.scss'

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ background: `url(${imageUrl}) no-repeat`}}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <hr />
    </div>
  )
}

export default CollectionItem
