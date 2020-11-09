import React from 'react'
import Layout from '../components/Layout'
import exploreStyles from './explore.module.scss'
import FilterBar from '../components/FilterBar'
import PostsList from '../components/PostsList'

const ExplorePage = () => {
  return(
      <Layout>

        <div className={exploreStyles.hero}>
          <div className={exploreStyles.feature}>
            <h2 className={exploreStyles.featureTitle}>Feature Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
          </div>
        </div>

        <div>
          <FilterBar/>
        </div>
        <div className={exploreStyles.postSection}>
          <PostsList/>
        </div>
      </Layout> 
      )}
export default ExplorePage