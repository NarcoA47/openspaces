
import './ListingsPage.css'

import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar from '../../components/Header'
import Filters from '../../components/Filters'
import Listing from '../../components/Listing'

import { TbAdjustmentsHorizontal,TbArmchair2 } from 'react-icons/tb'
import {AiOutlineWifi} from 'react-icons/ai'
import StarIcon from '@mui/icons-material/Star';
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { MdAir } from 'react-icons/md'


const hostelFilters = [
  {
    id:1,
    icon: <TbAdjustmentsHorizontal/>,
    title: "Prefferance"
  },
  {
    id:2,
    icon: "",
    title: "Safe and Hygenic"
  },
  {
    id:3,
    icon: <AiOutlineWifi />,
    title: "Wifi"
  },
  {
    id:4,
    icon: <StarIcon />,
    title: "Rating"
  },
  {
    id:5,
    icon: <VscWorkspaceTrusted />,
    title: "Trusted landlords"
  },
  {
    id:6,
    icon: <MdAir/>,
    title: "A/C"
  },
  {
    id:7,
    icon: "",
    title: "Balcony"
  },
  {
    id:8,
    icon: "",
    title: "Price"
  },
  {
    id:9,
    icon: <TbArmchair2/>,
    title: "Furnished"
  },
];
  

function ListingPage () {

  const [listinData, setListingData] = useState([]);

  useEffect(() => {
    const getAllListing = async () => {
        try {
            const {data} = await axios.get('/api/listings/getListing')
            setListingData(data);
            console.log(data);
        }catch(error) {
            console.log(error)
        }
    };

    getAllListing();
  }, []);

    return (
        <div className="ContainerMain">
            <div className="NavbarContainer">
                <NavBar/>
            </div>
            <div className="max-width ListingPageFilters">
                <Filters filterList={hostelFilters}/>
            </div>
            <div className="max-width ListingContainer">
                <div className="Listing">
                  {listinData.map(listing => (
                    <Listing listing={listing}/>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default ListingPage
