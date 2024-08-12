import React from 'react'
import {Link} from 'react-router-dom'
import './Listed.css'
import NavBar from '../../components/Header'
import Footer from '../../components/Footer'

import PhotoGallery from '../../components/Listed/PhotoGallery'
import {FaRegHeart} from 'react-icons/fa'



function Listed () {
    return (
        <div className="listed">
            <div className="max-width Navbar">
            <NavBar />
            </div>
            <div className="max-width Photo-Gallery">
                <PhotoGallery/>
            </div>
            <div className="max-width Information-Sector">
                <div className="header">
                <h2>Available date</h2>
                </div>
                <div className="max-width body">
                    <div className="Left-Text">
                        <div className="text">
                        <h2>Heading Text</h2>
                        <p>It is walking distance to a Jammie Shuttle, Mowbray Station and taxi rank.</p>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua par i expected</p>
                        </div>
                        <button>Read Full Description</button>
                        </div>
                        <div className="SimilarPlaces">
                        <h4>Similar Places To Go</h4>
                        <div className='card-section'>
                            <div className='Cards'>
                                <span className='title'>Title</span><br/>
                                <span className='Description'>Description</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="Right-Text">
                        <div className='Card-Payment'>
                            <div className='PriceListing'>
                                <div className='HeadingTag'>
                                    <span className='price'>k800</span>/
                                    <span className='duration'>Month</span>
                                </div>
                                <div className='BodyTag'>
                                    <span className='HeadingTitle'>
                                    Available from January 1, 2023
                                    </span>
                                    <Link to='/Disclaimer'><button>Enquire</button></Link><br/>
                                    <button><span><FaRegHeart/></span>Add To Favourite</button>
                                </div>
                                <div className=''>
                                    <h5>About Landlord</h5><span>His Name</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer">
            <Footer/>
            </div>
        </div>
    )
}

export default Listed
