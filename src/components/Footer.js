import React from 'react'
import footerStyles from './styles/footer.module.scss'
import fb from '../img/icons/logo-facebook.svg'
import ig from '../img/icons/logo-instagram.svg'
import twitterLogo from '../img/icons/logo-twitter.svg'
import googleLogo from '../img/icons/logo-google.svg'

const Footer = () => {
  return(
    <div className={footerStyles.container}>
      <p>Copyright 2020</p>
      <nav>
        <ol className={footerStyles.socialMedia}>
          <li>
            <a href="http://www.facebook.com"><img className={footerStyles.icon} src={fb} alt="facebook"/></a>
          </li>
          <li>
            <a href="http://www.instagram.com"><img className={footerStyles.icon} src={ig} alt="instagram"/></a>
          </li>
          <li>
            <a href="http://www.twitter.com"><img className={footerStyles.icon} src={twitterLogo} alt="twitter"/></a>
          </li>
          <li>
            <a href="http://www.google.com"><img className={footerStyles.icon} src={googleLogo} alt="google"/></a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Footer