import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import '../styles/index.scss'
import indexStyles from './index.module.scss'
import Footer from '../components/Footer'
import Head from '../components/Head'


const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        image {
          file {
            url
          }
        }
      }
    }
  `)
  return(
    <div className={indexStyles.container}>
      <Head title="Home"/>
      <div style={{
          backgroundImage: `-webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0.5)),to(rgba(0, 0, 0, 0.3))),url(${data.contentfulHomePage.image.file.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          backgroundAttachment: "fixed"
      }} className={indexStyles.hero}>
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