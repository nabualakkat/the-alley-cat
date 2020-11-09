import React from 'react'
import {Link} from 'gatsby'
import postsListStyles from './styles/postsList.module.scss'
import '../styles/grid.scss'
import costaRica from '../img/volcano-link.jpg'
import ireland from '../img/ireland-link.jpg'
import galapagos from '../img/galapagos-link.jpg'

const placeholderData = [{
    title: "Visiting Volcanoes",
    slug: 'costa-rica',
    publishedDate: 65135131,
    img: costaRica
  },{
    title: "Going to the Galapagos",
    slug: "galapagos",
    publishedDate: 553513135,
    img: galapagos
  },{
    title: "Escape to Ireland",
    slug: "ireland",
    publishedDate: 213131313,
    img: ireland
  },{
    title: "Visiting Volcanoes",
    slug: 'costa-rica',
    publishedDate: 65135131,
    img: costaRica
  },{
    title: "Going to the Galapagos",
    slug: "galapagos",
    publishedDate: 553513135,
    img: galapagos
  },{
    title: "Escape to Ireland",
    slug: "ireland",
    publishedDate: 213131313,
    img: ireland
  },]

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