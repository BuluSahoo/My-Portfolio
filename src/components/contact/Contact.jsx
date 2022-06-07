import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


const Contact = () => {

  
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineMail id='cont__icon'/>
            <h4>Email</h4>
            <h5>bulusahoo944@gmail.com</h5>
            <a href="mailto:bulusahoo891@gmail.com ">Send a message</a>
          </artical>

          <artical className="contact__option">
            <BsInstagram id='cont__icon'/>
            <h4>Instagram</h4>
            <h5>Bulu Sahoo</h5>
            <a href="https://www.instagram.com/bulusahoo12/"> Instagram</a>
          </artical>

          <artical className="contact__option">
            <BsWhatsapp id='cont__icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-9668168811</h5>
            <a href="http://api.whatsapp.com/send?phone=891726051">Whatsapp Me</a>
          </artical>
        </div>

        {/* ========= end of contact =========== */}

        <form action="" onSubmit={e=>{e.target.reset()}}>
          <input type="text" name='name' placeholder='Your Full Name ' required/>
          <input type="email" name=' email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn'>Send message</button>
        </form>
      </div>     
    </section>
  )
}

export default Contact
