import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (

    <div className='container'>
    <div className='max-width mobile-container footer'>
  <div className='container'>
    <div className='max-width footer'>
      <div className='footer-container'>
        <div className='footer-items'>
          <h2 className='footer-header'>Unistayrooms</h2>
          <Link to="/About"><li className='footer-list'>About us</li></Link>
          <Link to="/instructions"><li className='footer-list'>How unistayrooms works</li></Link>
        </div> 
      </div>

      <div className='footer-container'>
        <div className='footer-items'>
          <Link to="/Login"><h2 className='footer-header'>Tenant</h2></Link>
          <Link to="/Login"><li className='footer-list'>Invite friends</li></Link>
          <Link to=""><li className='footer-list'>Stories from our users</li></Link>
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer-items'>
          <Link to=""><h2 className='footer-header'>Landlord</h2></Link>
          <Link to=""><li className='footer-list'>List your place</li></Link>
          <Link to=""><li className='footer-list'>How unistayrooms works for landlords</li></Link>
        </div> 
      </div>

      <div className='footer-container'>
        <div className='footer-items'>
          <Link to="/Contact"><h2 className='footer-header'>Support</h2></Link>
          <Link to="/Cancellation"><li className='footer-list'>Cancellation</li></Link>
          <Link to="/Contact"><li className='footer-list'>Customer help center</li></Link>
          <Link to="/Contact"><li className='footer-list'>Talk to us</li></Link>
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer-items'>
          <Link to=""><h2 className='footer-header'>Join us</h2></Link>
          <Link to=""><li className='footer-list'>Become an Ambassador</li></Link>
          <Link to=""><li className='footer-list'>Become a unistayrooms partner</li></Link>
          <Link to=""><li className='footer-list'>Careers</li></Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer