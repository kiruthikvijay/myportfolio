import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/emotion.jpg'
import IMG2 from '../../assets/textabstract.jpg'
import IMG3 from '../../assets/aluminiphoto.jpg'
import IMG4 from '../../assets/stockphoto.jpg'
import IMG5 from '../../assets/cas.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt=''/>
          </div>
          <h3>EMOTION DETECTION AND SONG RECOMMENDATION</h3>
          <h5>G-Lock is a web application that captures the emotion of the person and helps the user to improve their 
              mental health by suggesting activities, videos, music, memes, etc. using machine learning and 
              convolutional neural networks.</h5>
          <div className="portfolio__item-cta">
          <a href='https://github.com/kiruthikvijay/EMOTION-DETECT' className='btn' target='_blank'>Github</a>
          {/* <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn btn-primary'>Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG2} alt=''/>
          </div>
          <h3>ABSTRACTIVE SUMMARIZATION USING Bi-LSTM</h3>
          <h5>This project assists people in summarization of paragraphs in abstractive form with deep learning 
              techniques. It produces more precise and coherent summaries without redundancy problems. This project
              generates and investigates the quality of the summary.And concluded that summarizing using Bi LSTM.
          </h5>
          <div className="portfolio__item-cta">
          <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn' target='_blank'>Github</a>
          {/* <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn btn-primary'>Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG3} alt=''/>
          </div>
          <h3>ALUMNI MANAGEMENT SYSTEM</h3>
          <h5>The project is to build a user-friendly environment to visually impaired, this device will provide best
              connectivity towards the students and the alumni. This also helps the student to gain knowledge about 
              their career.</h5>
          <div className="portfolio__item-cta">
          <a href='https://github.com/kiruthikvijay/ALUMINI-SYSTEM' className='btn' target='_blank'>Github</a>
          {/* <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn btn-primary'>Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG4} alt=''/>
          </div>
          <h3>INVENTORY DEMAND FOR AIRLINE PARTS</h3>
          <h5>The purpose of this project is to establish business management system which is used to manage the 
              parts of the aircrafts that are to me maintained and replaced. In case of any emergency the airline 
              parts are maintained as stock</h5>
          <div className="portfolio__item-cta">
          <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn' target='_blank'>Github</a>
          {/* <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn btn-primary'>Github</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG5} alt=''/>
          </div>
          <h3>CONTEXT AWARE SURVEY</h3>
          <h5>An AI-powered survey platform that can dynamically adjust the questions it asks based on a user's context and
              location. The platform will use GPS data to determine a user's location and ask relevant questions 
              about their surroundings.</h5>
          <div className="portfolio__item-cta">
          <a href='https://github.com/kiruthikvijay/context-aware-survey' className='btn' target='_blank'>Github</a>
          {/* <a href='https://github.com/kiruthikvijay/ABSTRACT-SUMMARIZATION' className='btn btn-primary'>Github</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio