import React from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <footer class="bg-light">
      <div className='container p-5'>
      <div class="row align-items-center justify-content-center">
      <div className='col-md-4 d-flex align-items-center justify-content-center flex-column'>
        <h4>Pay Buddy</h4>
             <ul className="list-unstyled">
               <li>+2348142274320</li>
               <li>Lagos, Nigeria</li>
              <li>Decagon Institute</li>
          </ul>
        </div>
        <div className='col-md-4 d-flex align-items-center justify-content-center flex-column'>
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>Artime Subscription</li>
              <li>DSTV Subscription</li>
              <li>Bank Transfer</li>
            </ul>
        </div>
        <div className='col-md-4 d-flex align-items-center justify-content-center flex-column'>
        <h4>Branch Offices</h4>
            <ul className="list-unstyled">
              <li>Edo-Tech Park, Benin</li>
              <li>Sangotedo, Lagos</li>
              <li>E-Library, Uyo</li>
            </ul>
        </div>
      
      </div>
      </div>
      

      <div className="site-owner-footer d-flex align-items-center justify-content-center flex-column ">
          <p className='text-center'>
            &copy;{new Date().getFullYear()} PAY-BUDDY | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
    </footer>
  )
}
export default Footer