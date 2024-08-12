import React from 'react'
import { FaHome } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { TbLayoutGridAdd } from 'react-icons/tb'
import { BsCreditCard2Back } from 'react-icons/bs'
import { MdOutlineNotificationsActive,MdLogout, MdOutlineSecurity } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './dashboard.css'


function Dashboard() {
  return (
    <div className='max-width'>
      <Header/>
      <div className='dashboard'>
        <div className='dashboard-link'>
          <Link to='/' className='link'>Dashboard</Link>
          <span>  </span>
          <Link className='link'>Account</Link>
        </div>
        <div className='dashboard-overview'>
          <h1 className='common-heading'>Account Overview</h1>
          <p className='dashboard-user-name'>David Mbewe</p>
        </div>
      </div>

      <div className='dashbord-cards'>
        <Link to="PersonalInfo" className='card-link'>
          <div className='dashboard-content-container'>
            <AiOutlineUser className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Personal Info</p>
            <p className='dashboard-description'>Edit and verify your personal details</p>
          </div>
        </Link>

        <Link className='card-link'>
          <div className='dashboard-content-container'>
            <TbLayoutGridAdd className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Listings</p>
            <p className='dashboard-description'>Add and view your listing history</p>
          </div>
        </Link>

        <Link className='card-link'>
          <div className='dashboard-content-container'>
            <MdOutlineNotificationsActive className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Notifications</p>
            <p className='dashboard-description'>Let us know what kinds of notifications you want to recieve from us</p>
          </div>
        </Link>

        <Link className='card-link'>
          <div className='dashboard-content-container'>
            <BsCreditCard2Back className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Payments & Billing</p>
            <p className='dashboard-description'>manage your payments and payout information</p>
          </div>
        </Link>

        <Link className='card-link'>
          <div className='dashboard-content-container'>
            <MdOutlineSecurity className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Login & Security</p>
            <p className='dashboard-description'>Update password and secure your account</p>
          </div>
        </Link>

        <Link className='card-link'>
          <div className='dashboard-content-container'>
            <MdLogout className='dashboard-card-icon'/>
            <p className='dashboard-card-title'>Logout</p>
            <p className='dashboard-description'>Logout of your account</p>
          </div>
        </Link>

      </div>



      <Footer/> 
    </div>
  )
}

export default Dashboard