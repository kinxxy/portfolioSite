//src/components/Contact/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024

import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import "./Contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether 
             you're looking to launch a new website, revamp an existing one, or need expert advice 
             on the best web technologies, I'm here to help. Reach out to discuss your project, ask 
             questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__icon'/>
              <h3>Email</h3>
              <h5>hastingsgold@gmail.com</h5>
              <a href="mailto:hastingsgold@gmail.com" target='_blank' rel="noreferrer"  className='btn'>Send a  message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__icon'/>
              <h3>Messenger</h3>
              <h5>Hastings Gold</h5>
              <a href="http://m.me/profile?id=profile-id" target='_blank' rel="noreferrer" className='btn'>Send a  message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__icon'/>
              <h3>WhatsApp</h3>
              <h5>+1(437)665-7625</h5>
              <a href="https://api.whatsapp.com/send?phone=+1(437)665-7625" target='_blank' rel="noreferrer" className='btn'>Send a  message</a>
            </article>
          </div>

          <form>
            <input type="text" name="name" placeholder='Your full name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name='message' rows={7} placeholder='Your Message'></textarea>
            <button type='submit' className="btn btn__primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
