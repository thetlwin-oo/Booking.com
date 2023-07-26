import React from 'react'
import "./home.css"
import Navbar from '../../component/Navbar'
import Header from '../../component/Header'
import Feature from '../feature/Feature'
import PropertyList from '../propertyList/PropertyList'
import FeatureProperty from '../featureProperty/FeatureProperty'
import MailList from '../mailList/MailList'
import Footer from '../footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Feature/>
          <h1 className='homeTitle'>Brower by propery type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home guests love</h1>
          <FeatureProperty/>
          <MailList/>
        </div>
    </div>
  )
}

export default Home