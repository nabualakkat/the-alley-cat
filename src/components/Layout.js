import React from 'react'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from './styles/layout.module.scss'

const Layout = (props) => {
  return(
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header theme={props.theme}/>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
export default Layout