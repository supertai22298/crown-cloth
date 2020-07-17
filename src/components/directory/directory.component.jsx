import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux'
import { selectSections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ ...item }) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
})
export default connect(mapStateToProps)(Directory)
