import react from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import PropertyType from '../PropertyType'
import Header from '../../../components/Header'
import './createListing.css'


import React from 'react'

function CreateListing() {
  return (
    <>
       
        <div>
            <Header/>
            <div className='max-width dev-container'>
                <div className='common-heading dev-heading'>
                    before proceeding make sure you have read and understood our terms and conditions
                </div>
                <div className='dev-link-container'>
                    <Link to='/type' className='dev-link'>
                        <div className='dev-btn'>Get Satrted</div>
                    </Link>
                </div>
                
            </div>
           
        </div>
    </>
  )
}

export default CreateListing