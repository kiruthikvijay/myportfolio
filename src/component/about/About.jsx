import React from 'react'
import './About.css'
import ME from '../../assets/myphoto.jpg'
import { FaAward} from 'react-icons/fa'
import {TbUser} from 'react-icons/tb'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
 
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>Who I am</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>About Me</h5>
              <small>B.E Graduated</small>
            </article>
            <article className='about__card'>
            <TbUser className='about__icon'/>
              <h5>Achievements</h5>
              <small>Proficient and Seasoned</small>
            </article>
            <article className='about__card'>
            <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>
          </div>
          <p>
          Seek challenging opportunities where I can fully manipulate my skills and to create myself an
          environment which encourages me to succeed and grow professionally, to use my distinctive qualities 
          to bring the best of me.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
