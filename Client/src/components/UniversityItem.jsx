import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/uni.css'

function UniversityItem({item}) {
  return (
    <div className='cover-container'>
        <Link to="/ListingPage"><div class="Card-Engagement">{item.card}</div></Link>
        <div className='cover'>
         <img src={item.cover} alt={item.name} className='cover-img'/>
        </div>
        <div className='uni-name'>{item.name}</div>
    </div>
  )
}

export default UniversityItem