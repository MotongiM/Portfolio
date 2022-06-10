import React from 'react'
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/michel-motongi-bb5584188/">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/michel.motongi/">
                <FaFacebookF />
            </a>
            
        </div>
        SocialMedia</div>
  )
}

export default SocialMedia