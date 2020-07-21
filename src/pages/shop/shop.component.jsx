import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import './shop.style.scss'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCollectionsFromFirestore } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { setCollectionsFromFirestore } = this.props
    const collectionRef = firestore.collection('collections')
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collections = convertCollectionSnapshotToMap(snapshot)
    //     setCollectionsFromFirestore(collections)
    //     this.setState({ loading: false })
    //   }
    // )
    collectionRef.get().then(
      async (snapshot) => {
        const collections = convertCollectionSnapshotToMap(snapshot)
        setCollectionsFromFirestore(collections)
        this.setState({ loading: false })
      }
    )
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromSnapshot()
  // }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}/`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCollectionsFromFirestore: (collections) =>
    dispatch(setCollectionsFromFirestore(collections)),
})
export default connect(null, mapDispatchToProps)(ShopPage)
