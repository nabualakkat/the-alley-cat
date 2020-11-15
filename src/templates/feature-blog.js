import React from 'react'
import {graphql} from 'gatsby'
import {BLOCKS} from '@contentful/rich-text-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Layout from '../components/Layout'
import Head from '../components/Head'
import featureBlogStyles from './feature-blogs.module.scss'

export const query = graphql`
  query($slug: String!){
    contentfulFeaturedPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const FeatureBlog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <div className={featureBlogStyles.imageContainer}><img src={url} alt={alt}/></div>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={featureBlogStyles.paragraph}>{children}</p>
      )
    }
  };
  return(
    <div className={featureBlogStyles.container}>
      <Layout theme={"dark"}>
        <Head title={props.data.contentfulFeaturedPost.title}/>
        <div className={featureBlogStyles.titleContainer}>
          <h1 className={featureBlogStyles.title}>{props.data.contentfulFeaturedPost.title}</h1>
          <p className={featureBlogStyles.date}>{props.data.contentfulFeaturedPost.publishedDate}</p>
        </div>
        <div>
          {documentToReactComponents(props.data.contentfulFeaturedPost.body.json, options)}
        </div>
      </Layout>
    </div>
  )
}

export default FeatureBlog


