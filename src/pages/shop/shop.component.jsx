import React from 'react'
import { createStructuredSelector } from 'reselect'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import './shop.style.scss'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import {  selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
// import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionsLoaded } = this.props
    // const { isFetching } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}/`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
            // <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
            // <CollectionPageWithSpinner isLoading={!isFetching} {...props} />
          )}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})
const mapStateToProps = createStructuredSelector({
  // isFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
