import React from 'react'
import '../styles/explore.css'

function ExploreItems({item}) {
  return (
    <div>
      <div className='explore-item-cover'>
        <img src={item.cover} alt={item.title} className='explore-image'/>
      </div>
      <div className='explore-item-title'>{item.title}</div>
    </div>
  )
}

export default ExploreItems
