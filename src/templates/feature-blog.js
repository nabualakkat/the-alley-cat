import React from 'react'
import {graphql} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import * as propTypes from 'prop-types'
import {BLOCKS} from '@contentful/rich-text-types'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Head from '../components/Head'
import featureBlogStyles from './feature-blogs.module.scss'

export const query = graphql`
query($slug:String!) {
  contentfulFeaturedPost(slug: {eq: $slug}) {
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
    [BLOCKS.EMBEDDED_ASSET]: node =>{
      return(
        <div className={featureBlogStyles.imageContainer}>
          <Img {...node.data.target}/>
        </div>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={featureBlogStyles.paragraph}>{children}</p>
    )
  }
};

const FeatureBlog = (props) => {
  return(
    <div className={featureBlogStyles.container}>
      <Layout theme={"dark"}>
        <Head title={props.data.contentfulFeaturedPost.title}/>
        <div className={featureBlogStyles.titleContainer}>
          <h1 className={featureBlogStyles.title}>{props.data.contentfulFeaturedPost.title}</h1>
          <p className={featureBlogStyles.date}>{props.data.contentfulFeaturedPost.publishedDate}</p>
        </div>
        <div>
          {props.data.contentfulFeaturedPost.body && renderRichText(props.data.contentfulFeaturedPost.body, options)}
        </div>
      </Layout>
    </div>
  )
}

FeatureBlog.propTypes = {
  data: propTypes.object.isRequired
}


export default FeatureBlog


