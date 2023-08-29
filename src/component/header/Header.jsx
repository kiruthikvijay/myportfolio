import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kiruthik Vijay</h1>
        <h5 className='text-light'>Developer</h5>
        <CTA/>
       <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>⬇</a>
      </div>
    </header>
  )
}

export default Header