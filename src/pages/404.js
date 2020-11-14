import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import img from '../img/404-page-1.jpg'
import notFoundStyles from './404.module.scss'


const NotFound = () => {
  return(
    <div style={{
      backgroundImage:`-webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0.5)),to(rgba(0, 0, 0, 0.3))),url(${img})`,
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}>
    <Layout theme={"light"}>
      <div className={notFoundStyles.container}>
        <h1>404 - Page Not Found</h1>
        <h2>Unfortunately, it's not the first time we've caught her sleeping on the job... </h2>
        <Link className={notFoundStyles.link} to="/explore">Keep on Exploring</Link>
      </div>
    </Layout>
    </div>
  )
}

export default NotFound