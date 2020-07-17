import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsArray } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.style.scss'

const CollectionOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArray,
})
export default connect(mapStateToProps)(CollectionOverview)
