import React from 'react'
import './collection.style.scss'
import { connect } from 'react-redux'
import { makeSelectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
  return (
    <div>
      {collection && (
        <div className="collection-page ">
          <h2 className="title">{collection.title.toUpperCase()}</h2>
          <div className="items">
            {collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: makeSelectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)
