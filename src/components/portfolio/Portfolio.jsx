import React from 'react'
import './portfolio.css'
import data from './Data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>MY Recenr Work</h5>
      <h2>Portfolio</h2>

      <div className="container port__container">

        {
          data.map(({id, image, title,github, demo}) => {
            return (
              <article key={id} className='port__item'>
                <div className="port__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>

                <div className="port__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn bt-primary' >Live Demo</a>
                </div>

              </article>
            )
          })
        }


      </div>

    </section>
  )
}

export default Portfolio
