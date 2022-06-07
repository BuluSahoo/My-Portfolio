import React from 'react'
import './services.css'
import { BsCheckAll } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container serv__container">

        {/* =============UX/UI DESIGN=========== */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>

        {/* =============WEB DEVELOPMENT=========== */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>

        {/* =============CONTENT CREATION=========== */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creatuion</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckAll className='serv_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
