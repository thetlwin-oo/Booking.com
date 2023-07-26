import React from 'react'
import './featureProperty.css'
import { Link } from 'react-router-dom'


const FeatureProperty = () => {
  return (
    <div className='featureProperty'>       
        <div className='featurePropertyItme'>

      <Link to="./hotel/:id">
        <img className='featurePropertyImg' src='https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
      </Link>    
            <div className='featurePropertyTitle'>
               <span className='hotelName'>Mandalar Hotel</span>
               <span className='city'>Mandalay</span>
               <span className='price'>Start from $25</span>
               <div className='rating'>
                 <button>8.7</button>
                 <span>Baget</span>
               </div>     
            </div>
        </div>

    <div className='featurePropertyItme'>
        <Link to="./hotel/:id">
            <img className='featurePropertyImg' src='https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featurePropertyTitle'>
               <span className='hotelName'>Mandalar Hotel</span>
               <span className='city'>Mandalay</span>
               <span className='price'>Start from $25</span>
               <div className='rating'>
                 <button>8.7</button>
                 <span>Baget</span>
               </div>     
            </div>
        </div>


    <div className='featurePropertyItme'>
        <Link to="./hotel/:id">
            <img className='featurePropertyImg' src='https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featurePropertyTitle'>
               <span className='hotelName'>Mandalar Hotel</span>
               <span className='city'>Mandalay</span>
               <span className='price'>Start from $25</span>
               <div className='rating'>
                 <button>8.7</button>
                 <span>Baget</span>
               </div>     
            </div>
        </div>

    <div className='featurePropertyItme'>
        <Link to="./hotel/:id">
            <img className='featurePropertyImg' src='https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        </Link>
            <div className='featurePropertyTitle'>
               <span className='hotelName'>Mandalar Hotel</span>
               <span className='city'>Mandalay</span>
               <span className='price'>Start from $25</span>
               <div className='rating'>
                 <button>8.7</button>
                 <span>Baget</span>
               </div>     
            </div>
        </div>

    </div>
  )
}

export default FeatureProperty