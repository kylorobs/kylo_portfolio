import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo";
import Post_Card from '../components/Posts/Post_Card/post_card';
import FlexContainer from '../hoc/FlexContainer';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges.map(({ node }) => {
      return (
        <Post_Card 
            title = {node.frontmatter.title || node.fields.slug} 
            slug = {node.fields.slug}
            src = '/'
            alt = 'image alt'
            description = {node.frontmatter.description || node.excerpt}
        />
      )
    });


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <FlexContainer justify='space-around'>
          {posts}
        </FlexContainer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
