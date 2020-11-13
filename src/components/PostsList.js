import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import postsListStyles from './styles/postsList.module.scss'
import '../styles/grid.scss'



const PostsList = (props) => {
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
            publishedDate
          }
        }
      }
    }
    `)
    const onSort = (data) => {
      const unsortedData = data.map((edge)=>edge.node)
      if(props.sortBy==="date"){
        const sortedData = unsortedData.sort((a,b) => {
          return new Date(a.publishedDate) > new Date(b.publishedDate) ? -1 : 1;
        })
      return sortedData
      
    }else{
      return unsortedData
    }
    }
  const posts = data.allContentfulBlogPost.edges.filter((edge)=>{
    return edge.node.title.toLowerCase().includes(props.searchText.toLowerCase())
  })

  return(
    <div className={`row`}>

      {onSort(posts).map((node)=>{
        console.log(node)
        console.log(posts)
        return(
          <div key={node.slug} className="col span-1-of-3">
            <Link style={{textDecoration:"none"}}to={`/blog/${node.slug}`}>
              <div style={{
                backgroundImage:`url(${node.thumbnailImage.file.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center"                
                }} className={postsListStyles.post}>
                <div>
                  <h2>{node.title}</h2>
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