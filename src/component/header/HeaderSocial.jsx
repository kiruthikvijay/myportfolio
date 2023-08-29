import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/kiruthik-vijay-239ba311a'target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/kiruthikvijay'target='_blank'><FaGithubSquare/></a>
        <a href='https://instagram.com/_.vijay.18._?igshid=OGQ5ZDc2ODk2ZA=='target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial