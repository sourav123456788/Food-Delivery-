import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsum velit suscipit vero aliquam voluptate consequuntur, voluptatibus ipsa? Dolorum aspernatur corporis libero, porro omnis facilis! Architecto doloremque nostrum reprehenderit soluta.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+166-66-999</li>
                    <li>contact@food56.com</li>
                </ul>
            </div>

      </div>

      <hr />
      <p className='footer-copy-right'>
       2025 Your Company Name. &copy;All rights reserved
      </p>
    </div>
  )
}

export default Footer
