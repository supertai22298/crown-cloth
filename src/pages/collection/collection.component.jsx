import React from 'react'
import './collection.style.scss'
import { connect } from 'react-redux'
import { makeSelectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
  const { items } = collection

  return (
    <div className="collection-page ">
      <h2 className="title">COLLECTION PAGE</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: makeSelectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)
