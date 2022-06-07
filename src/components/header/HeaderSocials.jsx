import React from 'react'
import { BsLinkedin} from 'react-icons/bs';
import {FaGithub } from 'react-icons/fa';
import {BsInstagram } from 'react-icons/bs';



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/feed/?trk=IN-SEM_google-adwords_Jordan-brand-sign-up" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/BuluSahoo" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/bulusahoo12/" target="_blank"><BsInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials
