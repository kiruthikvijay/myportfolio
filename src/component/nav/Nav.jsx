import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SiKnowledgebase} from 'react-icons/si'
import {AiOutlineProject} from 'react-icons/ai'
import {BiSolidContact} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href='#'onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
          <AiOutlineHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
          <AiOutlineUser/></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
          <SiKnowledgebase/></a>
        <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
          <AiOutlineProject/></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          <BiSolidContact/></a>
      </nav>
    </div>
  )
}

export default Nav