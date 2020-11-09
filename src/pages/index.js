import React from "react"
import {Link} from 'gatsby'
import indexStyles from './index.module.scss'
import Footer from '../components/Footer'

const HomePage = () => {
  return(
    <div className={indexStyles.container}>
      <div className={indexStyles.hero}>
        <div className={indexStyles.containerHeader}>
          <h1>The Alley Cat</h1>
          <div className={indexStyles.nav}>
            <Link to="/explore" className={indexStyles.navItem}>Explore</Link>
            <Link to="/about" className={indexStyles.navItem}>About Me</Link>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage