import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>KIRUTHIKVIJAY</a>
      <ul className='premalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Certificates</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/kiruthik.vijay?mibextid=b06tZ0'><FaFacebookF/></a>
        <a href='https://instagram.com/_.vijay.18._?igshid=OGQ5ZDc2ODk2ZA=='><FiInstagram/></a>
        <a href='https://twitter.com/kiruthikvijay'><IoLogoTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy;Kiruthikvijay_Website.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer