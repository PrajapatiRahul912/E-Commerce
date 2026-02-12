import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive On Your E-mail</h1>
      <p>Subscribe to Our newletter and Stay Updated</p>
      <div>
        <input type="e-mail" placeholder='your e-mail id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
