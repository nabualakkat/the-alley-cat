import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
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
  return(
      <Layout theme={"light"}>
        <Head title="Explore"/>
        <Link style={{textDecoration:"none"}}to={`/blog/${data.contentfulFeaturedPost.slug}`}>
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
          </Link>
          <div className={exploreStyles.filters}>
            <FilterBar/>
          </div>
          <div className={exploreStyles.postSection}>
            <PostsList/>
          </div>
        
      </Layout> 
      )}
export default ExplorePage