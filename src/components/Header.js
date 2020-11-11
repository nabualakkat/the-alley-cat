import React from 'react'
import {Link} from 'gatsby'
import lightStyles from './styles/header.module.scss'
import darkStyles from './styles/dark-header.module.scss'

const Header = ({theme}) => {
  let headerStyles
  if (theme==="light"){
    headerStyles = lightStyles
  }else if (theme==="dark"){
    headerStyles = darkStyles
  }
  return(
    <header className={headerStyles.header}>
      <h1 ><Link className={headerStyles.title} to="/" activeClassName={headerStyles.activeNavItem}>The Alley Cat</Link></h1>
      <ol className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} to="/explore" activeClassName={headerStyles.activeNavItem}>Explore</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/places" activeClassName={headerStyles.activeNavItem}>Places</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem}  to="/about" activeClassName={headerStyles.activeNavItem}>About</Link>
        </li>
      </ol>
    </header>
  )
}

export default Header