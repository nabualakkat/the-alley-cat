import React from 'react'
import {Link} from 'gatsby'
import postsListStyles from './styles/postsList.module.scss'
import '../styles/grid.scss'
import placeholderData from '../dummy-data/blog-data'

const PostsList = () => {
  return(
    <div className={`row ${postsListStyles.container}`}>
      {placeholderData.map((post)=>{
        return(
          <div className="col span-1-of-3">
            <Link>
              <div style={{background:`url(${post.img})`}} className={postsListStyles.post}>
                <div>
                  <h2>{post.title}</h2>
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