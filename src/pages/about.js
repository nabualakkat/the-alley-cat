import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {BLOCKS} from '@contentful/rich-text-types'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Layout from '../components/Layout'
import Head from '../components/Head'
import aboutStyles from './about.module.scss'
import '../styles/grid.scss'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulAboutPage {
      bioText {
        raw
      }
      valueStatement {
        raw
      }
      behindTheScenesPhotos {
        file {
          url
        }
      }
      profilePicture {
        file {
          url
        }
      }
    }
  }
  `)
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={aboutStyles.paragraph}>{children}</p>
      )
    }
  };
  const bio = data.contentfulAboutPage.bioText && renderRichText(data.contentfulAboutPage.bioText, options)
  const valueStatement = data.contentfulAboutPage.valueStatement && renderRichText(data.contentfulAboutPage.valueStatement, options)
  const btsImagesUrl = data.contentfulAboutPage.behindTheScenesPhotos.map((photo)=>photo.file.url)

  return(
    <div className={aboutStyles.container}>
      <Layout theme={"dark"}>
        <Head title="About"/>
        <div className="row section">
          <div className={aboutStyles.bodyContainer}>
          <div className="col span-5-of-8">
            <div className={aboutStyles.bioContainer}>
              <h1>Hi! I'm Grishma...</h1>
              {bio}
            </div>
          </div>
          <div className="col span-3-of-8">
          <div style={{
                backgroundImage:`url(${data.contentfulAboutPage.profilePicture.file.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
              }} className={aboutStyles.profile}></div>
          </div>
          <div className="col span-5-of-8">
            <div className="row">
              <div className="col span-1-of-2">
                <div
                  style= {{
                    backgroundImage:`url(${btsImagesUrl[0]})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center"    
                  }} className={aboutStyles.image1}>
                </div>
              </div>
              <div className="col span-1-of-2">
                <div                
                    style= {{
                    backgroundImage:`url(${btsImagesUrl[1]})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center"    
                  }} className={aboutStyles.image2}
                  >
                </div>
                <div   
                    style= {{
                    backgroundImage:`url(${btsImagesUrl[2]})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center"    
                  }} className={aboutStyles.image3}>
                </div>
              </div>
            </div>
          </div>
            <div className="col span-3-of-8">
              <div className={aboutStyles.valueContainer}>
              {valueStatement}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage