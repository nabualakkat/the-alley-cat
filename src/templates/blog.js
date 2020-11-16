import React from 'react'
import {graphql} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import * as propTypes from 'prop-types'
import {BLOCKS} from '@contentful/rich-text-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Head from '../components/Head'
import blogStyles from './blog.module.scss'

export const query = graphql`
query($slug:String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    contentful_id
    title
    slug
    body {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          __typename
          fluid(maxWidth: 900){
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
          }
        }
      }
    }
  }
}
`
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return(
        <div className={blogStyles.imageContainer}>
          <Img {...node.data.target}/>
        </div>
      )
  },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={blogStyles.paragraph}>{children}</p>
    )
  }
};


const Blog = (props) => {
  return(
    <div className={blogStyles.container}>
      <Layout theme={"dark"}>
        <Head title={props.data.contentfulBlogPost.title}/>
        <div className={blogStyles.titleContainer}>
          <h1 className={blogStyles.title}>{props.data.contentfulBlogPost.title}</h1>
          <p className={blogStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
        </div>
        <div>
          {props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body, options)}
        </div>
      </Layout>
    </div>
  )
}

Blog.propTypes = {
  data: propTypes.object.isRequired
}

export default Blog
