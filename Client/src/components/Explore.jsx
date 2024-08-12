import React from 'react'
import {Link} from 'react-router-dom'
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow"
import Slider from 'react-slick'
import ExploreItems from './ExploreItems'
import '../styles/exploreinfo.css'

import image from '../img/Exterior/pic4.jpg'
import image7 from '../img/Exterior/pic9.jpg'
import image8 from '../img/Exterior/pic8.jpg'
import image10 from '../img/Exterior/pic7.jpg'
import image9 from '../img/Exterior/pic5.jpg'
import image11 from '../img/Exterior/pic4.jpg'
import image12 from '../img/Exterior/pic10.jpg'
import image5 from '../img/Exterior/pic12.jpg'
import image3 from '../img/Exterior/pic1.jpg'


const exploreItems = [
  {
    id: 1,
    title: "Chilenje",
    cover: image,
  },
  {
    id: 2,
    title: "Leopards Hill",
    cover: image3
  },
  {
    id: 3,
    title: "Chelstone",
    cover: image5
  },
  {
    id: 4,
    title: "Manzi Valley",
    cover: image8
  },
  {
    id: 5,
    title: "Silverest",
    cover: image7
  },
  {
    id: 6,
    title: "Silverest",
    cover: image11
  },
  {
    id: 7,
    title: "Silverest",
    cover: image9
  },
  {
    id: 8,
    title: "Silverest",
    cover: image10
  },
  {
    id: 9,
    title: "Silverest",
    cover: image12
  },
]

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow />
};


function Explore() {
  return (
    <div className='explore-container'>
        <Link to="/ListingPage">
        <div className='max-width mobile-container'>
            <div className='common-heading'>Explore places that inspire you</div>
            <Slider {...settings}>
              {exploreItems.map((item)=>{
                return <ExploreItems item={item}/>
              })}
            </Slider>
        </div>
        </Link>
    </div>
  )
}

export default Explore
