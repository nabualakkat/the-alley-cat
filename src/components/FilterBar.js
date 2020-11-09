import React from 'react'
import filterBarStyles from './styles/filterBar.module.scss'

const FilterBar = () => {
  return(
    <div className={filterBarStyles.container}>
      <input className={filterBarStyles.searchBox} placeholder="Search Blog"/>
      <div className={filterBarStyles.containerButtons}>
        <button className={filterBarStyles.button}>Latest Travels</button>
        <button className={filterBarStyles.button}>My Favorites</button>
      </div>
    </div>
  )
}

export default FilterBar