import React from 'react'
import '../styles/uni.css'
import UniversityItem from './UniversityItem'
import image from '../img/universities/lemmu.jpg'

const university = [
    {
        name: "Cavendish University Zambia",
        cover: image,
        listed: '23 listed properties'
    },
    {
        name: "University of Zambia",
        cover: image,
        listed: '23 listed properties'
    },
    {
        name: "University of Lusaka",
        cover: image,
        listed: '23 listed properties'
    },
    {
        name: "Apex Medical University",
        cover: image,
        listed: '23 listed properties'
    },
    {
        name: "Information Communications University",
        cover: image,
        listed: '23 listed properties'
    },
    {
        name: "Levy Mwanawasa University",
        cover: image,
        listed: '23 listed properties'
    },
]



function Universities() {
  return (
    <div className='max-width container'>
    <div className='uni-container'>

        <div className='title-container'>
            <div className='first-header'>Our top Universities</div>
            <div className='second-header'>Discover listings near your university</div>
        </div>
        <div className='uni-content'>
            {university.map((item)=>{
                return <UniversityItem item={item}/>
            })}

        </div>
    </div>
    </div>
  )
}

export default Universities