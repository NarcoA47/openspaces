import React from 'react'
import activeApartment from "../img/static/Appartment.svg"
import inactiveApartment from "../img/static/Appartment.svg"
import activeHostel from "../img/static/Hostel.png"
import inactiveHostel from "../img/static/Hostel.png"
import activeHouse from "../img/static/House.svg"
import inactiveHouse from "../img/static/House.svg"
import "../styles/TabOptions.css"

const tabs = [
  {
    id: 1,
    name:"Student Residences",
    active_img: activeHostel,
    backdrop:"#fceec0",
    inactive: inactiveHostel,
  },
  {
    id: 2,
    name:"Entire Place",
    active_img: activeHouse,
    backdrop:"#E5F3F3",
    inactive: inactiveHouse
  },
  {
    id: 3,
    name:"Shared Apartments",
    active_img: activeApartment,
    backdrop:"#EDf4FF",
    inactive: inactiveApartment
  }
]

function TabOptions({activeTab, setActiveTab}) {
  return (
    <div className='tab-options'>
      <div className='max-width mobile-container tabs-wrapper'>
        {tabs.map((item)=>{
          return(
            <div
            onClick={() => setActiveTab(item.name)}
            className={`tab-item absolute-center cursor-pointer ${
              activeTab === item.name && "active-tab"
            }`}>

              <div className='tab-image-container absolute-center'
              style={{
                backgroundColor: `${
                  activeTab === item.name ? item.backdrop : ""
                }`
              }}>
                <img className='tab-image' alt={item.name} src={activeTab === item.name ? item.active_img : item.inactive}/>
              </div>
              <div className='tab-name'>{item.name}</div>
            
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabOptions;
