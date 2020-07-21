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

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const {setCollectionsFromFirestore} = this.props
    const collectionRef = firestore.collection('collections')
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collections = convertCollectionSnapshotToMap(snapshot)
        setCollectionsFromFirestore(collections)
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
  }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}/`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
