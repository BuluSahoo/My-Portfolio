import React from 'react'
import './footer.css'
import { BsLinkedin} from 'react-icons/bs';
import {FaGithub } from 'react-icons/fa';
import {BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">SAHOO</a>
            <ul className='links'>
                <li><a href="#">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="##portfolio">PORTFOLIO</a></li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
                <li><a href="#contact">CONTACTS</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/feed/?trk=IN-SEM_google-adwords_Jordan-brand-sign-up" ><BsLinkedin /></a>
                <a href="https://github.com/BuluSahoo" ><FaGithub /></a>
                <a href="https://www.instagram.com/bulusahoo12/" ><BsInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Bulu Sahoo. All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
