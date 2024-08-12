import React from 'react'
import Explore from '../Explore'
import Filters from '../Filters'
import Properties from '../Properties'
import Universities from '../Universities'
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
]

function StudentResidences() {
  return (
    <>
      <div className="max-width">
        <Filters filterList={hostelFilters}/>
      </div>
      <Explore/>
      <Properties/>
      <Universities/>
    </>
  )
}

export default StudentResidences
