import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector'
import CollectionOverview from './collection-overview.component'
import { compose } from 'redux'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
