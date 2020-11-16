import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './styles/footer.module.scss'
import fb from '../img/icons/logo-facebook.svg'
import ig from '../img/icons/logo-instagram.svg'
import twitterLogo from '../img/icons/logo-twitter.svg'
import googleLogo from '../img/icons/logo-google.svg'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      contentfulSocialMedia{
        twitter
        facebook
        instagram
        google
      }
    }
  
  `)
  return(
    <footer className={footerStyles.container}>
      <p>Copyright 2020</p>
      <nav>
        <ol className={footerStyles.socialMedia}>
          <li>
            <a href={data.contentfulSocialMedia.facebook}><img className={footerStyles.icon} src={fb} alt="facebook"/></a>
          </li>
          <li>
            <a href={data.contentfulSocialMedia.instagram}><img className={footerStyles.icon} src={ig} alt="instagram"/></a>
          </li>
          <li>
            <a href={data.contentfulSocialMedia.twitter}><img className={footerStyles.icon} src={twitterLogo} alt="twitter"/></a>
          </li>
          <li>
            <a href={data.contentfulSocialMedia.google}><img className={footerStyles.icon} src={googleLogo} alt="google"/></a>
          </li>
        </ol>
      </nav>
    </footer>
  )
}

export default Footer