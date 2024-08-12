import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/Header'
import TabOptions from '../../components/TabOptions'
import StudentResidences from '../../components/hostels/index'
import Shared from '../../components/shared'
import Apartments from '../../components/apartments'
import Footer from '../../components/Footer'

function Home() {

    const [activeTab, setActiveTab] = useState("Hostels")

  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
    
  
}

const getCorrectScreen = (tab) => {
    switch(tab){
        case "Student Residences":
            return <StudentResidences/>

        case "Entire Place":
            return <Shared/>

        case "Shared Apartments":
            return <Apartments/>
        default:
            return <StudentResidences/>
    }
}

export default Home;
