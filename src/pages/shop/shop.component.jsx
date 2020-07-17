import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import './shop.style.scss'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => {
  console.log(match.path)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}/`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}
export default ShopPage
