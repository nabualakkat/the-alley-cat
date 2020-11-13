import React from 'react'
import filterBarStyles from './styles/filterBar.module.scss'

const FilterBar = (props) => {

  return(
    <div className={filterBarStyles.container}>
      <input
      onChange={(e) => {props.setTextFilter(e.target.value)}}
      className={filterBarStyles.searchBox} placeholder="Search Blog"
      />
      <div className={filterBarStyles.containerButtons}>
        <button
          className={filterBarStyles.button}
          onClick={()=>{props.setSortFunction("date")}}
          >Latest Travels</button>
        <button
        onClick={() => {props.setSortFunction("")}}
        className={filterBarStyles.button}>My Favorites</button>
      </div>
    </div>
  )
}

export default FilterBar