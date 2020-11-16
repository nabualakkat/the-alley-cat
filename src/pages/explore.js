import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import '../styles/index.scss'
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
          file {
            url
          }
          title
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

  return(
      <Layout theme={"light"}>
        <Head title="Explore"/>
        <Link style={{textDecoration:"none"}}to={`/blog/${data.contentfulFeaturedPost.slug}`}>
          <div className={exploreStyles.container}>
            <div style={{
                background: `-webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0.5)),to(rgba(0, 0, 0, 0.3))),url(${data.contentfulFeaturedPost.thumbnailImage.file.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                height:"100vh",
                backgroundAttachment:"fixed"
            }} className={exploreStyles.hero}>
              <div className={exploreStyles.feature}>
                <h2 className={exploreStyles.featureTitle}>{data.contentfulFeaturedPost.title}</h2>
                <p>{data.contentfulFeaturedPost.excerpt.excerpt} </p>
              </div>
            </div>
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