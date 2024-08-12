import React from 'react'
import NavBarMain  from '../../components/Header'
import Footer from '../../components/Footer'
import './Instructions.css'




function Instructions() {
  return (
    <div className='max-width HowItWorks-container '>
        <div className='NavBar'>
        <NavBarMain/>
        </div>
        <div className='Titlebar-container'><h1>How It Works</h1></div>
        <div className='Page-container'>
            <h1>How Unistay Works</h1>
            <p1>Our new booking chat feature allows you as the tenant and landlord to chat directly on our local chat system, as soon as you've sent or received a booking enquiry.</p1>
            <h1>Landlord</h1>
            <p1>Follow these steps to find your ideal tenant, and only pay us on success (move-in). No fee to list.</p1>
            
    
            <h3>1.Sign up</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
            <h3>2.Add a Place</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
            <h3>3.Send your request</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
            <div className='button'><button>Landlord Resources</button></div>
            <h1>Tenant</h1>
            <p1>Follow these steps to find your ideal tenant, and only pay us on success (move-in). No fee to list.</p1>
            
    
            <h3>1.Sign up</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
            <h3>2.Add a Place</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
            <h3>3.Send your request</h3>
            <p1>Click the sign-up button at the top right of the homepage, fill in your details to create a basic profile and voilà, you’re in. We validate your contact details for security reasons.</p1>
        </div>
        <div className='Footer'>
            <Footer/>
        </div>
    </div>
  )
}
export default Instructions
