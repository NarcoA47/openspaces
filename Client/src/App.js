import Home from './pages/home';
import {Routes, Route} from 'react-router-dom'
import ListingsPage from './pages/listings/ListingPage'
import TermsAndConditions from './pages/terms/TermsAndConditions'
import Privacy from './pages/privacy/Privacy.jsx'
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Dashboard UI/account/Account'
import Settings from './pages/Dashboard UI/settings/Settings'
import List from './pages/Dashboard UI/listings/List'
import ContactUs from './pages/contact/ContactUs'
import Instructions from './pages/instructions/Instructions.jsx';
import Listed from './pages/Listed/Listed'
import Personal from './pages/Personal/UserInfo'

import Cancellation from './pages/Cancellation/Cancellation';


import Affiliate from './pages/Affiliate/Affiliate';
import Disclaimer from './pages/Disclaimer/Disclaimer.jsx';

import About from './pages/About/About.jsx'
import Login from './pages/Login/LogIn.jsx'
import CreateAccount from './pages/CreateAccount/CreateAccount'



function App() {
  return (
        <Routes>
            <Route path='/dashboard' element={
              
              <Dashboard/>
            }/>
            <Route path='/myaccount' element={
            <ProtectedRoutes>
            <Account/>
            </ProtectedRoutes>
            }/>
            <Route path='/settings' element={
            <ProtectedRoutes>
              <Settings/>
            </ProtectedRoutes>
            }/>
            <Route path='/mylistings' element={
            <ProtectedRoutes>
              <List/>
            </ProtectedRoutes>
            }/>

          <Route path='/' element={
              <Home/>
          } />
          <Route path='/listings' element={
            <ListingsPage />
          } />
          <Route path='/PersonalInfo' element={
          <ProtectedRoutes>
            <Personal/>
          </ProtectedRoutes>
          }/>
          <Route path='/ListingPage' element={
            <ListingsPage />
          } />
          <Route path='/Disclaimer' element={
            <Disclaimer />
          } />          
          <Route path='/TermsAndConditions' element={
            <TermsAndConditions />
          } />
          <Route path='/Contact' element={
            <ContactUs/>
          } />
          <Route path='/Privacy' element={
            <Privacy />
          } />
          <Route path='/About' element={
              <About />
          } />
          <Route path='/Privacy' element={
              <Privacy />
          } />
          <Route path='/instructions' element={
              <Instructions />
          } />
          <Route path='/Listed' element={
              <Listed />
          } />
          <Route path='/Login' element={
              <Login />
          } />

          <Route path='/Affiliate' element={
           
              <Affiliate />
          } />

          <Route path='/CreateAccount' element={
              <CreateAccount />
          } />
          <Route path='/Cancellation' element={
            <ProtectedRoutes>
              <Cancellation />
            </ProtectedRoutes>
          } />
      </Routes>
  )
}

export default App;

export function ProtectedRoutes({childrean}) {
  if(localStorage.getItem("auth")) {
    return childrean;
  }
  else {
    return <Navigate to="/Login"/>
  }
}