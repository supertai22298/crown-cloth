import {connect} from 'react-redux'
import { compose } from 'redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer