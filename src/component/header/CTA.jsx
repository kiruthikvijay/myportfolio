import React from 'react'
import CV from './../../assets/KIRUTHIKVIJAY P resume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
       <a href={CV} download className='btn'>Download Resume</a>
       <a href='#contact' className='btn btn-primary'>To Talk</a> 
    </div>
  )
}

export default CTA