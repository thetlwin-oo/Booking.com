import React from 'react'
import "./mail.css"

const MailList = () => {
  return (
    <div className='mail'>
        <div className='mailContainer'>
            <h1>Save time,save money!</h1>
            <span>Sign up and we'll send the best deals to you</span>

            <div className='inputMail' >
                <input placeholder='Your email'/>
                <button>Subscribe</button>
            </div>
        </div>

    </div>
  )
}

export default MailList