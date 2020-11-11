import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import postsListStyles from './styles/postsList.module.scss'
import '../styles/grid.scss'
import placeholderData from '../dummy-data/blog-data'



const PostsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            thumbnailImage {
              file {
                url
              }
              title
            }
            title
            slug
          }
        }
      }
    }
    `)
  return(
    <div className={`row ${postsListStyles.container}`}>
      {data.allContentfulBlogPost.edges.map((edge)=>{
        return(
          <div className="col span-1-of-3">
            <Link style={{textDecoration:"none"}}to={`/blog/${edge.node.slug}`}>
              <div style={{
                background:`url(${edge.node.thumbnailImage.file.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center"                
                }} className={postsListStyles.post}>
                <div>
                  <h2>{edge.node.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PostsList