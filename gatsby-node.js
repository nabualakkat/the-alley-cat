const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const featureTemplate = path.resolve('./src/templates/feature-blog.js')
  const res = await graphql(`
    query{
      allContentfulFeaturedPost{
        edges{
          node{
            slug
          }
        }
      }
      allContentfulBlogPost{
        edges{
          node{
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach((edge)=>{
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allContentfulFeaturedPost.edges.forEach((edge)=>{
    createPage({
      component: featureTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
