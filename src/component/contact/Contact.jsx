import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_umjd1kh', 'template_s11shp8', form.current, '4_e_J118AATbW3-bf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kiruthikvijay.prof@gmail.com</h5>
            <a href='mailto:kiruthikvijay.prof@gmail.com' target='_blank'>Mail Me</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Kiruthik Vijay</h5>
            <a href='https://www.linkedin.com/in/kiruthik-vijay-239ba311a' target='_blank'>Message Me</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>9442130256</h5>
            <a href='https://api.whatsapp.com/send?phone=9442130256' target='_blank'>Contact Me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
           <input type='text' name='name' placeholder='Your Full Name' required />
           <input type='email' name='email' placeholder='Your Email' required />
           <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact