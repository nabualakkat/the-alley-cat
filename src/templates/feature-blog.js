import React from 'react'
import {graphql} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import * as propTypes from 'prop-types'
import {BLOCKS} from '@contentful/rich-text-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
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
          fixed(width: 1600) {
            width
            height
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
    [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target}/>,
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={featureBlogStyles.paragraph}>{children}</p>
    )
  }
};

const FeatureBlog = (props) => {
  const {body} = props.data.contentfulFeaturedPost
  return(
    <div className={featureBlogStyles.container}>
      <Layout theme={"dark"}>
        <Head title={props.data.contentfulFeaturedPost.title}/>
        <div className={featureBlogStyles.titleContainer}>
          <h1 className={featureBlogStyles.title}>{props.data.contentfulFeaturedPost.title}</h1>
          <p className={featureBlogStyles.date}>{props.data.contentfulFeaturedPost.publishedDate}</p>
        </div>
        <div>
          {body && renderRichText(body.raw, options)}
        </div>
      </Layout>
    </div>
  )
}

FeatureBlog.propTypes = {
  data: propTypes.object.isRequired
}


export default FeatureBlog


