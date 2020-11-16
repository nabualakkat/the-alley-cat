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
          fluid(maxWidth: 900) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
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
        <Link style={{textDecoration:"none"}}to={`/blog/${data.contentfulFeaturedPost.slug}`}>
          <div className={exploreStyles.container}>
            <BackgroundImage  
            Tag="section"
            className={exploreStyles.hero}
            fluid={imageData}>
              <div className={exploreStyles.feature}>
                <h2 className={exploreStyles.featureTitle}>{data.contentfulFeaturedPost.title}</h2>
                <p>{data.contentfulFeaturedPost.excerpt.excerpt} </p>
              </div>
            </BackgroundImage>
          </div>
          </Link>
          <div className={exploreStyles.filters}>
            <FilterBar setTextFilter={setTextFilter} setSortFunction={setSortFunction}/>
          </div>
          <div className={exploreStyles.postSection}>
            <PostsList searchText={searchText} sortBy={sortBy}/>
          </div>
        
      </Layout> 
      )}
export default ExplorePage