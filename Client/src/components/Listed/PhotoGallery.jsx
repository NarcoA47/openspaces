import React from 'react'

import '../../styles/PhotoGallery.css'
import MainImage from '../../img/Interior/pic1.jpg'
import SideImageOne from '../../img/Interior/pic2.jpg'
import SideImageTwo from '../../img/Interior/pic3.jpg'
import SideImageThree from '../../img/Interior/pic4.jpg'
import SideImageFour from '../../img/Interior/pic5.jpg'

function PhotoGallery () {
    return (
        <div className="photo-gallery">
            <div className="photo-gallery__container">
                <div className="photo-gallery__Main">
                    <img src={SideImageOne} alt='MainImage'/>
                    <button>View all</button>
                </div>
                <div className="photo-gallery__Side">
                    <span className='Section'>
                        <img src={SideImageOne} alt='SideImageOne'/>
                    </span>
                    <span className='Section'>
                        <img src={SideImageTwo} alt='SideImageTwo'/>
                    </span>
                    <span className='Section'>
                        <img src={SideImageFour} alt='SideImageThree'/>
                    </span>
                    <span className='Section'>
                        <img src={SideImageFour} alt='SideImageFour'/>
                    </span>
                    <button>View all</button>
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery
