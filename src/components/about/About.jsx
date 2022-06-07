import React from 'react'
import './About.css'
import ME from '../../assets/new1.jpg'
import { RiAwardFill } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>        
        </div>       
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro cum voluptas, illum modi laudantium cupiditate architecto minus. Magni reiciendis placeat facilis, provident consequuntur deleniti excepturi ea eum repellat recusandae laudantium?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
