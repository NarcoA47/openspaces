import {FaRegHeart, FaWifi} from 'react-icons/fa'
import '../styles/Listing.css'

import react from 'react'

import {Link} from 'react-router-dom'

const Listing = ({listing}) => {

    return (
        <div className="max-width ListingContainerMain">
            <Link to="/Listed">
            <div className="HeaderListing">
                <div className="ListingCount">
                    <span>0</span>
                    <span> listings</span>
                </div>
                <div className="ListingCount">
                    <span>sort by</span><span>&#x2193;</span>
                    <div className="Dropdown">
                        <span><h6>Price High to Low</h6></span>
                        <span><h6>Price Low to High</h6></span>
                    </div>
                </div>
            </div>
            <div className="Body">
                <div className="content">
                    <div className="image-content">
                    {<img alt={listing.name} src={listing.image} />}
                    </div>
                    <div className="text-content">
                        <div className="header-content">
                            <span className='Location'><h5>Cavendish University Zambia</h5></span>
                            <span><h4>{ <FaRegHeart/> }</h4></span>
                        </div>
                        <div className="Residence-information">
                            <span>{listing.type}</span>
                            <span className='dot'> &#x2022; </span>
                            <span>
                                <span>3</span>
                                <span>room types available</span>
                            </span>
                        </div>
                        <div className="HostelDetail">
                            <div className="HostelTitle">
                                <span><b>{listing.name}</b></span>
                            </div>
                            <div className="5-Word-Description">
                            <span>{listing.description}</span>
                            </div>
                        </div>
                        <div class="CardFooter">
                            <div className="Prices">
                                <span className='ItemFrom'>From</span>
                                <span>K</span>
                                <span>{listing.price}</span>
                                <span className='item'>per month</span>
                            </div>
                            <div className="icons">
                                <span className="icon">{/* <FaWifi/> */}<span className='text'>Wi-Fi</span></span>
                                <span className="icon">{/* <FaWifi/> */}<span className='text'>Wi-Fi</span></span>
                                <span className="icon">{/* <FaWifi/> */}<span className='text'>Wi-Fi</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Listing 