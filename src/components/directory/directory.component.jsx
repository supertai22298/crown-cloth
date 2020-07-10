import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import { sections } from './directory.data.js'

class Directory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: sections,
    }
  }

  render() {
    return (
      // <div className="directory-menu">
      //   {this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
      //     <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} />
      //   ))}
      // </div>
       <div className="directory-menu">
        {this.state.sections.map(({...item}) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    )
  }
}

export default Directory
