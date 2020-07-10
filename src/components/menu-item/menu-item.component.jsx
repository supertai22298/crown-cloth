import React from 'react'
import './menu-item.style.scss'

// const MenuItem = ({ title,imageUrl }) => (
//   <div
//     className="menu-item"
//     style={{
//       background: `url(${imageUrl})`,
//     }}
//   >
//     <div className="content">
//       <h1 className="title">{title}</h1>
//       <span className="subtitle">SHOP NOW</span>
//     </div>
//   </div>
// )
const MenuItem = ({ item }) => (
  <div className={`${item.size} menu-item`}>
    <div
      className="background-image"
      style={{
        background: `url(${item.imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{item.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem
