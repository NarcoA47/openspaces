import React from 'react'
import { useState } from 'react'
import './UserInfo.css'

import NavBar from '../../components/Header'
import Footer from '../../components/Footer'



function UserInfo() {
  const [isActive, setIsActive] = useState(false)
  const [isEmailClick,setIsEmailClick] = useState(false)
  const [isPhoneClick,setIsPhoneClick] = useState(false)
  const [isAreaClick,setIsAreaClick] = useState(false)

  return (
    <>
    <div className='sidebar-container'>
     <div className='NavBar'>
      <NavBar/>
     </div> 
        <div className='personal-container max-width '>
          <div className='personal-info'>
            <div className='info-title'>
              <h3 className='info'>Personal Details</h3>
              <p className='info-det'>verify and update your personal details</p>
            </div>
            <div className='personal-input-section'>
              <div className='personal-edit'>
                <p className='profile'>Profile Details</p>
                <button className='edit-btn' onClick={(e)=>setIsActive(!isActive)}>Edit</button>
              </div>
              <div>
                <h3></h3>
              </div>
              {isActive && (

                <div className='edit-container'>
                  <div className='input-container'>
                    <label className='input-label'>Username</label>
                    <input className='edit-input' type='email' placeholder='Edit username' />
                  </div>
                  <form className='edit-form'>
                    <div className='input-container'>
                      <label className='input-label'>First name</label>
                      <input className='edit-input' type='text' placeholder='Edit your username' />
                    </div>
                    <div className='input-container'>
                      <label className='input-label'>Last name</label>
                      <input className='edit-input' type='text' placeholder='Edit your last name' />
                    </div>
                  </form>
                  <div className='save-btn-container'>
                    <button type="submit" className='save-btn'>Save</button>
                  </div> 
              </div>

              )}
                
            </div>
            <div className='personal-input-section'>
              <div className='personal-edit'>
                <p className='profile'>Location</p>
                <button className='edit-btn' onClick={(e)=>setIsAreaClick(!isAreaClick)}>Add</button>
              </div>
              <div>
                  <h3></h3>
              </div>

                {isAreaClick && (
                  <>
                    <div className='input-container'>
                      <input className='edit-input' type='text' placeholder='update your location' />
                    </div>
                    <div className='save-btn-container'>
                      <button type="submit" className='save-btn'>Update</button>
                    </div>
                  </>
              
                )}

              
            </div>
            
              <div className='personal-input-section'>
              <div className='personal-edit'>
                <p className='profile'>Email</p>
                <button className='edit-btn' onClick={(e)=>setIsEmailClick(!isEmailClick)}>Edit</button>
              </div>
              <div>
                  <h3></h3>
              </div>

              {isEmailClick && (
                <>
                  <div className='input-container'>
                        <input className='edit-input' type='email' placeholder='Edit your email' />
                  </div>
                  <div className='save-btn-container'>
                        <button type="submit" className='save-btn'>Update</button>
                  </div>
              </>
              )}
            </div>
            


            <div className='personal-input-section'>
              <div className='personal-edit'>
                <p className='profile'>Phone</p>
                <button className='edit-btn' onClick={(e)=>setIsPhoneClick(!isPhoneClick)}>Add</button>
              </div>
              <div>
                <h3></h3>
              </div>
              {isPhoneClick && (
                <>
                  <div className='input-container'>
                      <input className='edit-input' type='number' placeholder='Edit your phone number' />
                  </div>
                  <div className='save-btn-container'>
                        <button type="submit" className='save-btn'>Update</button>
                  </div>
                </>
              )}
              
            </div>
          </div> 
        </div>
        <div className='Footer'>
          <Footer/>
        </div>
    </div>
  </>
  )
}


export default UserInfo
