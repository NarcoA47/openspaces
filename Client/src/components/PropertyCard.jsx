import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/properties.css'
import {TbArmchair2, TbBed} from 'react-icons/tb';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FactCheckIcon from '@mui/icons-material/FactCheck';



function PropertyCard({item}) {
  return (
    <div className='property-card cursor-pointer'>
        <div className='card-cover'>
            <div className='card-details'>
              <div className='image-cover'>
                <Link to="/Listed"><img className='card-image' src={item.cover}/></Link>
              </div>
              <div className='property-info'>
                <div className='prop-name'>{item.title}</div>
                <div className='verified'><AdminPanelSettingsIcon className='verified-icon'/> Verified</div>
                <FavoriteBorderIcon className='heart-icon'/>
                <div className='rating'>
                  <div className='list-type'><span>Apartment</span>student residence</div>
                  <div className='absolute-center'><span>4.3</span> <StarIcon className='star'/> </div>
                </div>
                
                <div className='list-description'>beautiful student residence conducive for studying and recreation</div>
                <div className='listed-date'>Available since january 2022</div>
                <div className='card-groups'>
                    <div className='group-price'>K 1,200/<small>month</small></div>
                    <div className='group-icons'>
                      <FactCheckIcon className='icon'/>
                      <TbArmchair2 className='icon'/>
                      <TbBed className='icon'/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard
