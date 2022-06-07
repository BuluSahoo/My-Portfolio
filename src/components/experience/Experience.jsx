import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container exp__container">
                <div className="exp__frontend">
                    <h3>Frontend Development</h3>
                    <div className="exp__content">
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text__light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text__light'>Intrmediate</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>React.js</h4>
                                <small className='text__light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="exp__backend">
                    <h3>Backend Development</h3>
                    <div className="exp__content">
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Node.js</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Django</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon' />
                            <div>
                                <h4>My SQL</h4>
                                <small className='text__light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp__details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text__light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Experience
