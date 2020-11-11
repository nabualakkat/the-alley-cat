import React from 'react'
import {graphql} from 'gatsby'
import {BLOCKS} from '@contentful/rich-text-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Layout from '../components/Layout'
import Head from '../components/Head'
import blogStyles from './blog.module.scss'

export const query = graphql`
query($slug:String!){
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "MMM Do, YYYY")
    body {
      json
    }
  }
}
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <div className={blogStyles.imageContainer}><img alt={alt} src={url}/></div>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={blogStyles.paragraph}>{children}</p>
      )
    }
  };

  return(
    <div className={blogStyles.container}>
      <Layout theme={"dark"}>
        <Head title={props.data.contentfulBlogPost.title}/>
        <div className={blogStyles.titleContainer}>
          <h1 className={blogStyles.title}>{props.data.contentfulBlogPost.title}</h1>
          <p className={blogStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
        </div>
        <div>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </div>
      </Layout>
    </div>
  )
}

export default Blog
