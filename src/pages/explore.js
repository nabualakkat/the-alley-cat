import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'
import exploreStyles from './explore.module.scss'
import FilterBar from '../components/FilterBar'
import PostsList from '../components/PostsList'
import Head from '../components/Head'



const ExplorePage = () => {
  
  const data = useStaticQuery(graphql`
    query{
      contentfulFeaturedPost {
        thumbnailImage {
          fluid(quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        title
        slug
        excerpt{
          excerpt
        }
      }
    }
  `)

  const [searchText, setSearchText] = useState('')
  const [sortBy, setSortBy] = useState('')

  const setTextFilter = (searchInput) => {
    setSearchText(searchInput)
  }

  const setSortFunction = (sort) => {
    setSortBy(sort)
  }

  const imageData = data.contentfulFeaturedPost.thumbnailImage.fluid

  return(
    <Layout theme={"light"}>
      <Head title="Explore"/>
        <div className={exploreStyles.heroWrapper}>
          <Link style={{textDecoration:"none"}}to={`/blog/${data.contentfulFeaturedPost.slug}`}>
          <BackgroundImage  
            className={exploreStyles.hero}
            fluid={imageData}>
              <div className={exploreStyles.feature}>
                <h2 className={exploreStyles.featureTitle}>{data.contentfulFeaturedPost.title}</h2>
                <p>{data.contentfulFeaturedPost.excerpt.excerpt} </p>
              </div>
          </BackgroundImage>
          </Link>
        </div>
        
        <div className={exploreStyles.filters}>
          <FilterBar setTextFilter={setTextFilter} setSortFunction={setSortFunction}/>
        </div>
        <div className={exploreStyles.postSection}>
          <PostsList searchText={searchText} sortBy={sortBy}/>
        </div>      
    </Layout>
  )}
export default ExplorePage