import React from 'react'
import Headerimage from '../Headerimage'

export default function Footer() {
  return (
   <>
    <div className='footers'>
        <div className='left'>
           <a  className="footer" href='#'>Music.com</a> 
           <div>
          <Headerimage></Headerimage>
          </div> 
        </div>
       
        <div className='right'>
            <div className='icon'>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div> <i class="fa-brands fa-twitter"></i></div>
            
            
           
            </div>
        </div>
    </div>
   </>
  )
}
