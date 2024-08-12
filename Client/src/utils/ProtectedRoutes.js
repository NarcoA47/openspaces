import React from 'react'
import { Outlet , Navigate } from 'react-router-dom' 



function ProtectedRoutes() {

    const auth = { 'token': true } 


  return (
    auth.token ? <Outlet/> : <Navigate to="/account" />
  )
}

export default ProtectedRoutes