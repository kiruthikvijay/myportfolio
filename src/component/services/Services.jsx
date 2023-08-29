import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Know My Tracks</h5>
      <h2>Milestones</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Rolls And Responsibilities</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sports House captain in SNS Academy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troop Leader in Independence day in SNS Academy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Was part of the Parade on Republic Day and 
                Inndependence Day in Satchinanda Jothi Nikethan </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Coordinated A Technical event (Elements) as CSI Member</p>
            </li>
          </ul>
        </article>
        {/* END OF r&r */}
        <article className='service'>
          <div className="service__head">
            <h3>Certification</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>BEC Examination by Cambridge English in Distinction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>COT National robotics competition, IIT hyderabad</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MLSA Hack Heist, SREC</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NPTEL industry 4.0 and lOT</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infosys springboard certified java language features</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infosys Springboard certified Java SE 8 Features</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Nvidia certified Fundamentals of Deep Learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cambridge certified English language (YLE)</p>
            </li>
          </ul>
        </article>
{/* END OF CERTIFICATE */}
        <article className='service'>
          <div className="service__head">
            <h3>Personal Assests And Interest</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>A Quick and Self Learner</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent Team Worker</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative Thinker</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communication Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Projects in OpenCV</p>
            </li>
          </ul>
        </article>
        {/* END OF PER&INT */}
      </div>
    </section>
  )
}

export default Services