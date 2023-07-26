import React from 'react'
import "./feature.css"
import { Link } from 'react-router-dom'


const Feature = () => {
  return (
    <div className='feature'>


        <div className='featureItem'>
        <Link to="./hotels">
            <img className='featureImg'  src='https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featureTitle'>
                <h1>Feature</h1>
                <h1>1232</h1>
            </div>
        </div>
        

        <div className='featureItem'>
        <Link to="./hotels">
           <img className='featureImg' src='https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featureTitle'>
                <h1>Feature</h1>
                <h1>1232</h1>
            </div>
        </div>
        
        
        <div className='featureItem'>
        <Link to="./hotels">
            <img className='featureImg' src='https://images.pexels.com/photos/1520619/pexels-photo-1520619.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featureTitle'>
                <h1>Feature</h1>
                <h1>1232</h1>
            </div>
        </div>
    </div>
  )
}

export default Feature